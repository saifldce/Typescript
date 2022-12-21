const USER_FIELDS = [
  "id",
  "userName",
  "firstName",
  "lastName",
  "email",
];

const DB_MODEL_REF = {
  USER: "users",
  REQUEST: "request",
};


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const APP_NAME = "Friend_Request";


module.exports = {
  APP_NAME,
  DB_MODEL_REF,
  EMAIL_REGEX,
  USER_FIELDS,
};
