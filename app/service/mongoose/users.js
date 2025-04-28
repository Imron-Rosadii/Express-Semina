const Users = require("../../api/v1/users/model");
const Organizers = require("../../../app/api/v1/organizers/model");
const { BadRequest } = require("../../errors");

const createOrganizer = async (req) => {
  const { organizer, role, email, password, confirmPassword, name } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequest("Password and confirm password not match");
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({ name, email, password, organizer: result._id, role });

  delete users._doc.password;

  return users;
};

const createUsers = async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequest("Password and confirm password not match");
  }

  const result = await Users.create({ name, email, organizer: req.user.organizer, password, role });
  return result;
};

module.exports = { createOrganizer, createUsers };
