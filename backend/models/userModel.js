const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dw5m0bden/image/upload/v1688824721/Profile_mkxn35.png",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteresPassword) {
  return await bcrypt.compare(enteresPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //for bcrypt the password
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;