const Joi = require("joi");
const registerValidator = (body) => {
  const schema = Joi.object({
    firstname: Joi.string().required().min(3),
    lastname: Joi.string().required().min(3),
    username: Joi.string().required().min(3),
    email: Joi.string().required(),
    birth: Joi.string().required(),
    gender: Joi.string().required(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(body);
};
const loginValidator = (body) => {
  const schema = Joi.object({
    email: Joi.string().required(),

    password: Joi.string().required().min(8),
  });
  return schema.validate(body);
};
module.exports.loginValidator = loginValidator;
module.exports.registerValidator = registerValidator;
