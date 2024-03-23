const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const role = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string();

const getAdminSchema = Joi.object({
  id: id.required(),
});

const createAdminSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  role : role.require(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

const updateAdminSchema = Joi.object({
  name,
  lastName,
  phone,
  role,
  userId
});

module.exports = { getAdminSchema, createAdminSchema, updateAdminSchema };