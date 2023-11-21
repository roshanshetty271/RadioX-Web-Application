const responseHandler = require('./response-handles');

exports.generateBill = (req, res) => {
  // Implementation to generate a bill
  // Use the responseHandler for consistent responses
  responseHandler.sendSuccess(res, "Bill generated successfully");
};
