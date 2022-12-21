const { Joi } = require("express-validation");


module.exports = {
  create: {
    body: Joi.object({
      slug: Joi.string().required(),
    }),
  },
};
