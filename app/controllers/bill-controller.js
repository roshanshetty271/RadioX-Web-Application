import { sendSuccess, sendError } from './response-handles.js';

export const generateBill = (req, res) => {
  try {
    const { patientName, service, amount } = req.body;

    // Validating required fields
    if (!patientName || !service || !amount) {
      sendError(res, 400, 'Patient name, service, and amount are required');
      return;
    }

    // Generate a unique bill ID (replace this with your actual implementation)
    const billId = generateUniqueId();

    // Generate the bill
    const bill = {
      id: billId,
      patientName,
      service,
      amount,
      createdAt: new Date(),
    };

    sendSuccess(res, 'Bill generated successfully', { bill });
  } catch (error) {
    console.error(error); // Log the error
    sendError(res, 500, 'Internal server error');
  }
};

const generateUniqueId = () => {
  return Math.random().toString(36).substring(7);
};