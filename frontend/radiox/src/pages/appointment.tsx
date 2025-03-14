import React from 'react';
import Navbar from '../components/Home/NavBar/Navbar';
import AppointCalendar from '../components/Appointment/AppointCalendar/appointCalendar';
import { Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Appointment() {
  const navigate = useNavigate();

  const handleBackToProfile = () => {
    navigate('/patient');
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={handleBackToProfile}
          >
            Back to Profile
          </Button>
        </Box>
        <AppointCalendar />
      </Container>
    </>
  );
}

export default Appointment;