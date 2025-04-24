const Users = require("../../api/v1/users/model");
const { BadRequest, Unauthorized } = require("../../errors");
const { createJWT } = require("../../utils/jwt");
const { createTokenUser } = require("../../utils/CreateTokenUser");

const signin = async (req) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please provide email and password");
  }

  const result = await Users.findOne({ email });
  if (!result) {
    throw new Unauthorized("Invalid Credentials");
  }
  const isPasswordCorrect = await result.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Unauthorized("Invalid Credentials");
  }
  const token = createJWT({ payload: createTokenUser(result) });

  return token;
};

module.exports = { signin };
