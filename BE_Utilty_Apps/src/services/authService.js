const { User, sequelize } = require("../database/models");
const BaseService = require("./baseService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthService extends BaseService {
  constructor() {
    super(User);
  }
  async register({ name, email, password }) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
     // Convert Sequelize instance to plain object
  const userData = user.get({ plain: true });

  // Remove sensitive or unnecessary fields
  delete userData.password;
  delete userData.createdAt;
  delete userData.updatedAt;
    return { message: "User registered successfully", data: userData };
  }

  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

     // Convert to plain object and exclude sensitive fields
  const userData = user.get({ plain: true });
  delete userData.password;
  delete userData.createdAt;
  delete userData.updatedAt;

  return {
    message: "Login successful",
    token,
    data: userData
  };
  }
}

module.exports = AuthService;
