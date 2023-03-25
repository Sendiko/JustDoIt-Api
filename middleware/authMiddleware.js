const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      "fb6c8c05f15329aece60fb2e49773f96ab2e0c04e0770bda0c797c0e7119616fff9ce7673eda0602193819b14d8503cf92c9313cfaee6029546c0d3cba67ae7b"
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }
}

module.exports = {
  authenticateToken,
};
