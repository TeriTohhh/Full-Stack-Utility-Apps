const AuthService = require("../services/authService");

exports.register = async (req, res, next) => {
  try {
    const authService = new AuthService()
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const authService = new AuthService()
    const result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};