const { StatusCodes } = require("http-status-codes");
const { createOrganizer, createUsers } = require("../../../service/mongoose/users");

const createCMSOrganizers = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);
    res.status(StatusCodes.CREATED).json({
      message: "Organizer berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);
    res.status(StatusCodes.CREATED).json({
      message: "User berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCMSOrganizers, createCMSUser };
