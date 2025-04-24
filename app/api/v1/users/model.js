const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcryptjs");

let usersSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama kategori harus diisi"],
      minlength: [3, "Panjang nama minimal 3 karakter"],
      maxlength: [20, "Panjang nama maksimal 20 karakter"],
    },
    email: {
      type: String,
      required: [true, "Email harus diisi"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      minlength: [6, "Panjang password minimal 8 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "organizer", "owner"],
      default: "admin",
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Users", usersSchema);
