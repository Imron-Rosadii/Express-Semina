const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories } = require("../../../service/mongoose/categories");
const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(StatusCodes.CREATED).json({
      message: "Kategori berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);
    res.status(StatusCodes.OK).json({
      message: "Kategori berhasil diambil",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      message: "Kategori berhasil diambil",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);
    res.status(StatusCodes.OK).json({
      message: "Kategori berhasil diupdate",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);
    res.status(StatusCodes.OK).json({
      message: "Kategori berhasil dihapus",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  find,
  update,
  destroy,
};
