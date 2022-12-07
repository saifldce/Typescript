const { toJSON } = require("./plugins");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { DB_MODEL_REF } = require("../config/constant");

const schema = new mongoose.Schema(
  {
    userName: { type: String, default: "" },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, allowNull: false },   
    suggestionDate: { type: String, default: "" },
    createdBy: { type: String, default: "" },
    updatedBy: { type: String, default: "" },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
schema.plugin(toJSON);



// Check if email is exists
schema.statics.isEmailExists = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

// Check if password matches
schema.methods.checkPassword = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

schema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model(DB_MODEL_REF.USER, schema);
module.exports = User;
