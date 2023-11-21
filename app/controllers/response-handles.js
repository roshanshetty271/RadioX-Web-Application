exports.sendSuccess = (res, message) => {
    res.status(200).json({ message });
  };
  
  exports.sendError = (res, statusCode, message) => {
    res.status(statusCode).json({ error: message });
  };
  