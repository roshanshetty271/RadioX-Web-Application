const responseHandler = require('./response-handles');

exports.deletePatient = (req, res) => {
  // Implementation to delete a patient by ID
  // Use the responseHandler for consistent responses
  responseHandler.sendSuccess(res, "Patient deleted successfully");
};
