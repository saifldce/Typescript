const httpStatus = require("http-status");
const moment = require("moment");
const { Request: Model, User } = require("../../models");
const MESSAGE = require("../../config/message");

/**
 * Create a UserRequest
 * @param {Object} body
 * @returns {Promise<UserRequest>}
 */
const request = async (req, res) => {
  const { id } = req.params;
  // const { slug } = req.query;
  const {slug} = req.body;
  const userId = req.user.id;
  try {
    const userInstance = await User.findById(id);
    if (!userInstance) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: MESSAGE.invalid_id,
        success: false,
        data: {},
      });
    }
    // request send by
    const currentUserRequest = await Model.findOne({ user: userId });
    // request send to
    const userRequest = await Model.findOne({ user: id });
    if (slug === "R") {  // to sent user request
      if (!currentUserRequest) {
        let data = { user: userId, sentRequest: [id] };
        await Model.create(data);
        if (!userRequest) {
          data = { user: id, recieveRequest: [userId] };
          await Model.create(data);
        }
        return res.status(httpStatus.CREATED).send({
          data: {},
          success: true,
          message: MESSAGE.create_success,
        });
      } else if (!userRequest) {
        const data = { user: id, recieveRequest: [userId] };
        await Model.create(data);
        return res.status(httpStatus.CREATED).send({
          data: {},
          success: true,
          message: MESSAGE.create_success,
        });
      }
      const index = currentUserRequest.sentRequest.includes(id);
      if (!index) {
        currentUserRequest.sentRequest.push(id);
        userRequest.recieveRequest.push(userId);
      }
    } else if (slug === "D") { // to decline user request
      const currentUserIndex = currentUserRequest.recieveRequest.indexOf(id);
      const userIndex = userRequest.sentRequest.indexOf(userId);
      if (currentUserIndex > -1 && userIndex > -1) {
        currentUserRequest.recieveRequest.splice(currentUserIndex, 1);
        userRequest.sentRequest.splice(userIndex, 1);
      }
    } else {  // to accept user request
      currentUserRequest.friends.push(id);
      userRequest.friends.push(userId);
      const currentUserIndex = currentUserRequest.recieveRequest.indexOf(id);
      const userIndex = userRequest.sentRequest.indexOf(userId);
      if (currentUserIndex > -1 && userIndex > -1) {
        currentUserRequest.recieveRequest.splice(currentUserIndex, 1);
        userRequest.sentRequest.splice(userIndex, 1);
      }
    }
    currentUserRequest.save();
    userRequest.save();
    return res.status(httpStatus.CREATED).send({
      data: {},
      success: true,
      message: MESSAGE.update_success,
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
      success: false,
      data: {},
    });
  }
};

// user request list

const list = async (req, res) => {
  const userId = req.user.id;
  const { slug } = req.query;
  // console.log("slug",slug)
  try {
    let data = {};
    if (slug === "recieve-request") {
      // user recieveRequest list
      data = await Model.findOne({ user: userId })
        .populate([
          {
            path: "recieveRequest",
            select: "firstName lastName userName email",
          },
        ])
        .select("recieveRequest user");
        // data = {data: data.recieveRequest,user:data.user,_id:data.id}
    } else if (slug === "sent-request") {
      // user sentRequest list
      data = await Model.findOne({ user: userId })
        .populate([
          { path: "sentRequest", select: "firstName lastName userName email" },
        ])
        .select("sentRequest user");
    } else {
      // user friends list
      data = await Model.findOne({ user: userId })
        .populate([
          { path: "friends", select: "firstName lastName userName email" },
        ])
        .select("friends user");
    }
    return res.status(httpStatus.OK).send({
      data: data,
      success: true,
      message: MESSAGE.retrieve_success,
    });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
      success: false,
      data: {},
    });
  }
};

// user suggestion list

const suggestionList = async (req, res) => {
  let currentDate = new Date();
  currentDate = moment(currentDate).format("YYYY-MM-DD");
  const userId = req.user.id;
  // retrieve all user except current user from User collection
  const data = await User.find({ _id: { $ne: userId } }).select(
    "id firstName lastName userName email suggestionDate"
  );
  // retrieve current user instance from Request collection
  const userInstance = await Model.findOne({ user: userId });
  const sentRequest = userInstance?.sentRequest || [];
  const recieveRequest = userInstance?.recieveRequest || [];
  const friends = userInstance?.friends || [];
  const allRequest = [...sentRequest, ...recieveRequest, ...friends].toString();
  const sugesstionInstance = await Promise.all(
    data.filter((e) => {
       // show user suggestion only once in a day
      if (e.suggestionDate !== currentDate || !e.suggestionDate) {
        let id = e.id.toString();
        if(!allRequest.includes(id)){
          e.suggestionDate = currentDate;
          e.save()
        }
        return allRequest.indexOf(id) == -1;
      }
    })
  );
  sugesstionInstance.splice(2);
  return res
    .status(httpStatus.OK)
    .send({
      data: sugesstionInstance,
      success: true,
      message: MESSAGE.retrieve_success,
    });
};

module.exports = {
  request,
  list,
  suggestionList,
};
