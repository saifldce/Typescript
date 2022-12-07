const { toJSON} = require("./plugins");
const mongoose = require("mongoose");
const { DB_MODEL_REF } = require("../config/constant");

const schema = new mongoose.Schema(
  {
    user:
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: DB_MODEL_REF.USER,
    },
    sentRequest: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: DB_MODEL_REF.USER,
      },
    ],
    recieveRequest: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: DB_MODEL_REF.USER,
      },
    ],
    friends: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: DB_MODEL_REF.USER,
      },
    ],
    createdBy: { type: String, default: "" },
    updatedBy: { type: String, default: "" },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
schema.plugin(toJSON);


const Request = mongoose.model(DB_MODEL_REF.REQUEST, schema);
module.exports = Request;
