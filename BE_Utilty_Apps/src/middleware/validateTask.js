module.exports = function validateTask(req, res, next) {
    const { title } = req.body;
    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Task title is required." });
    }
    next();
  };
  