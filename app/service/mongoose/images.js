const Images = require("../../api/v1/images/model");
const { NotFound } = require("../../errors");

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file ? `uploads/${req.file.filename}` : "uploads/avatar/default.jpeg",
  });

  return result;
};

const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFound(`Image not found with id :   ${id}`);

  return result;
};

module.exports = { createImages, checkingImage };
