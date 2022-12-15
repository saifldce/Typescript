const httpStatus = require("http-status");
const { User: Model, Request } = require("../../models");
const MESSAGE = require("../../config/message");

// user list which are not friend

const list = async (req, res) => {
  const userId = req.user.id;
  try {
    const userInstance = await Model.find({ _id: { $ne: userId } }).select(
      "id firstName lastName userName email"
    );
    const requestInstance = await Request.findOne({ user: userId });
    const sentRequest = requestInstance?.sentRequest || [];
    const recieveRequest = requestInstance?.recieveRequest || [];
    const friends = requestInstance?.friends || [];
    const allRequest = [
      ...sentRequest,
      ...recieveRequest,
      ...friends,
    ].toString();
    const sugesstionInstance = await Promise.all(
      userInstance.filter((e) => {
        let id = e._id.toString();
        return allRequest.indexOf(id) == -1;
      })
    );
    return res.status(httpStatus.OK).send({
      data: sugesstionInstance,
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

// mutual friend list

const mutualFriend = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const userInstance = await Request.findOne({ user: userId })
      .populate([
        { path: "friends", select: "id firstName lastName userName email" },
      ])
      .select("friends");
    const requestInstance = await Request.findOne({ user: id });

    const requestFriend = requestInstance?.friends || [];
    const userFriends = userInstance?.friends || [];

    const mutualInstance = await Promise.all(
      userFriends.filter((e) => {
        let id = e._id.toString();
        return requestFriend.indexOf(id) > -1;
      })
    );
    return res.status(httpStatus.OK).send({
      data: mutualInstance,
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

module.exports = {
  list,
  mutualFriend,
};
