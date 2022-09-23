const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) return res.status(401).send("Token kerak");
  const decoded = jwt.verify(token, "MAXFIY_KALIT");
  if (!decoded)
    return res.status(403).send("Ro'yhatdan o'tmagan foydalanuvchi!");
  req.token = decoded._id;

  next();
};
