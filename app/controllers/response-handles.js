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
// app/controllers/response-handles.js

export const setResponse = (data, res) => {
    res.status(200).json(data);
};

export const setErrorResponse = (error, res) => {
    res.status(500).json({
        code: "ServiceError",
        message: "Error occurred while processing your request."
    });
};
