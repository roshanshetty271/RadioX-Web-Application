export const sendSuccess = (res, message) => {
  res.status(200).json({
    success: true,
    message: message,
  });
};

// Function to send an error response
export const sendError = (res, statusCode, errorMessage) => {
  res.status(statusCode).json({
    success: false,
    error: errorMessage,
  });
};
