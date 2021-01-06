//Success and Error para respuestas del servidor
exports.success = (req, res, message = "", status = 200) => {
  res.status(status).json({
    error: false,
    status,
    body: message,
  });
};
exports.error = (req, res, message = "Internal server error", status = 500) => {
  res.status(status).json({
    error: false,
    status,
    body: message,
  });
};
