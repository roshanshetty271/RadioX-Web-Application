const responseHandler = require('./response-handles');

exports.addDoctor = (req, res) => {
  // Implementation to add a new doctor
  // Use the responseHandler for consistent responses
  responseHandler.sendSuccess(res, "Doctor added successfully");
};

exports.deleteDoctor = (req, res) => {
  // Implementation to delete a doctor by ID
  // Use the responseHandler for consistent responses
  responseHandler.sendSuccess(res, "Doctor successfully deleted");
};

exports.updateDoctor = (req, res) => {
  // Implementation to update details of a doctor by ID
  // Use the responseHandler for consistent responses
  responseHandler.sendSuccess(res, "Doctor details updated successfully");
};
