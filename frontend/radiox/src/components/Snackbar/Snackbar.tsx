import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';

interface SnackbarComponentProps {
    open: boolean;
    handleOpenSnackbar: (open: boolean) => void;
    severity: AlertColor;
    message: string
  }

function SnackbarComponent({ open, handleOpenSnackbar, severity, message }: SnackbarComponentProps){
  return (
    <Snackbar
      open={open}
      autoHideDuration={2500} // Adjust the duration as needed
      onClose={() => handleOpenSnackbar(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={() => handleOpenSnackbar(false)} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;