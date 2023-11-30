<<<<<<< HEAD
// response-handler.js
=======


export const setResponse = (data, response) => {
    response.status(200)
            .json(data)
}
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb

/**
 * Function to set a success response.
 * @param {Object} data - Data to be included in the response.
 * @param {Object} res - Express response object.
 */
export const setResponse = (data, res) => {
    res.status(200).json({
      success: true,
      data,
    });
  };
  
  /**
   * Function to set an error response.
   * @param {Error} error - The error object.
   * @param {Object} res - Express response object.
   */
  export const setErrorResponse = (error, res) => {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  };
  