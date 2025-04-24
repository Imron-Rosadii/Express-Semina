const { createTalents, getOneTalets, updateTalents, deleteTalents, getAllTalents } = require("../../../service/mongoose/talents");

const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
  try {
    const result = await createTalents(req);
    res.status(StatusCodes.CREATED).json({
      message: "Talent berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllTalents(req);
    res.status(StatusCodes.OK).json({
      message: "Talent berhasil diambil",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneTalets(req);
    res.status(StatusCodes.OK).json({
      message: "Talent berhasil diambil",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateTalents(req);
    res.status(StatusCodes.OK).json({
      message: "Talent berhasil diupdate",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteTalents(req);
    res.status(StatusCodes.OK).json({
      message: "Talent berhasil dihapus",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index, find, update, destroy };
