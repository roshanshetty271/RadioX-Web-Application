import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextareaAutosize,
  Grid,
  Button,
  Paper,
  Box,
  Snackbar,
  CircularProgress,
  Select,
  MenuItem,
} from '@mui/material';
import DwvComponent from '../DwvComponent';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

const DwvPage: React.FC = () => {
  const [doctorRemarks, setDoctorRemarks] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [patientInfo, setPatientInfo] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);
  const { doctorId, patientId } = useParams<{ doctorId: string; patientId: string }>();

  const handleRemarksChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDoctorRemarks(event.target.value);
  };

  const handlePostRemark = () => {
    // Make a PUT request to the API endpoint
    axios
      .put(`http://localhost:8000/doctors/${doctorId}/patients/${patientId}/remarks`, {
        remarks: doctorRemarks,
        patientScansDone: true,
      })
      .then(response => {
        // Handle success
        console.log('Remark posted successfully:', response.data);
        setSnackbarOpen(true); // Open the snackbar
      })
      .catch(error => {
        // Handle error
        console.error('Error posting remark:', error);
      });
  };

  useEffect(() => {
    // Fetch patient information using a GET request
    axios
      .get(`http://localhost:8000/doctors/${doctorId}/patients/${patientId}/info`)
      .then(response => {
        setDoctorRemarks(response.data.patientInfo.remarks);
        setPatientInfo(response.data.patientInfo);
      })
      .catch((error: AxiosError) => {
        if (axios.isAxiosError(error) && error.response) {
          // Handle specific Axios errors
          console.error('Axios Error:', error.response.status, error.response.data);
        } else {
          // Handle other errors
          console.error('Error fetching patient information:', error.message);
        }
      })
      .finally(() => {
        // Set loading to false once the data is fetched
        setLoading(false);
      });
  }, [doctorId, patientId]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {/* DwvComponent or Image */}
      <Grid item xs={8}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <h3>&nbsp;Scanned Image of <u>{patientInfo?.patientName || 'Unknown Patient'}</u></h3>
            {patientInfo?.scannedImages ? (
              // Render image if scannedImages are available
              <img
                src={patientInfo?.scannedImages}
                style={{ width: '100%', height: '60%', objectFit: 'contain', marginTop: 20 }}
                aria-label="Scanned Image"
              />
            ) : (
              // Render DWVComponent if scannedImages are not available
              <DwvComponent scannedImages={patientInfo?.scannedImages || []} />
            )}
          </>
        )}
      </Grid>

      {/* Remarks Section */}
      <Grid item xs={4}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: 85, height: '80vh', overflowY: 'auto' }}>
          {/* Display Patient Information */}
          {loading ? (
            <CircularProgress />
          ) : (
            <div>
              <Typography variant="h6" gutterBottom>
                Patient Information
              </Typography>
              <hr />
              <Typography>{`Name: ${patientInfo?.patientName || 'Unknown Patient'}`}</Typography>
              <Typography>{`Location: ${patientInfo?.patientLocation || 'Unknown Location'}`}</Typography>
              <Typography>{`Phone Number: ${patientInfo?.patientPhoneNumber || 'Unknown Phone Number'}`}</Typography>
              <Typography>
                Scans Done:
                <Select
                  value={patientInfo?.patientScansDone?.toString()} 
                  disabled
                  style={{ marginLeft: 8 }}
                >
                  <MenuItem value="true">Yes</MenuItem>
                  <MenuItem value="false">No</MenuItem>
                </Select>
              </Typography>
            </div>
          )}
          <Typography variant="h6" gutterBottom>
            Doctor's Remarks
          </Typography>
          <TextareaAutosize
            style={{ width: '100%', minHeight: '150px', marginBottom: '16px', padding: 20 }}
            value={doctorRemarks}
            onChange={handleRemarksChange}
            placeholder="Enter your remarks here..."
          />
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handlePostRemark}>
              Post Remark
            </Button>
          </Box>
        </Paper>
      </Grid>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Remark posted successfully!"
      />
    </Grid>
  );
};

export default DwvPage;
