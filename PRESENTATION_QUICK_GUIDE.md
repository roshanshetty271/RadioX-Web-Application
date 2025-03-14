# RadioX - Presentation Quick Guide

## Starting the Application

### Start Backend Server
```bash
# In project root directory
npm install
npm run init-db  # Only needed first time to populate database
npm start
```

### Start Frontend 
```bash
# In a new terminal
cd frontend/radiox
npm install
npm start
```

### Start MongoDB
```bash
# Open MongoDB Compass to view the database during the presentation
# Connect to: mongodb://localhost:27017/MasterDb
```

## Login Credentials

### Patient Demo
- Username: patient
- Password: patient123

### Doctor Demo
- Username: doctor1
- Password: doctor123

### Admin Demo
- Username: admin
- Password: admin123

## Demo Flows (Step-by-Step)

### Flow 1: Patient Appointment Booking
1. Log in with patient credentials
2. Point out dashboard elements (personal info, appointments)
3. Click "Schedule Appointment"
4. Select city (example: "New York")
5. Select a doctor (any from dropdown)
6. Select a date on the calendar
7. Select an available time slot (green ones)
8. Fill in basic information and confirm booking by clicking "Book Appointment"
9. View the confirmation dialog showing appointment details
10. Return to dashboard and show "My Appointments"
11. **MongoDB Integration**: Open MongoDB Compass to show the appointments collection with the new entry

### Flow 2: Appointment Cancellation
1. From the patient dashboard, click on "My Appointments"
2. Find an existing appointment in the list
3. Click the "Cancel" button on an appointment
4. In the confirmation dialog, point out the appointment details and cancellation policy
5. Click "Confirm Cancellation"
6. Show the cancellation confirmation message
7. **MongoDB Integration**: Show in MongoDB Compass that the appointment status has been updated to "cancelled"

### Flow 3: Doctor Dashboard & DICOM Viewer
1. Log in with doctor credentials
2. Show dashboard overview:
   - Quick action buttons on top (View Reports, Schedule, Patients, Analytics)
   - Analytics cards displaying patient counts and performance metrics
   - Patient visit trends graph
   - Completion rate circular progress
3. Click "View Schedule" button
   - Show the calendar view with appointments
   - Explain the color coding (scheduled, completed, cancelled)
   - Point out how doctors can see their daily agenda
4. Click "Manage Patients" button
   - Show the patient list with search functionality
   - Explain how patient records are organized
   - Demonstrate accessing a patient's medical history
5. Click "View Reports" button
   - Show the list of medical reports
   - Explain the different report types (X-Ray, MRI, CT Scan)
   - Select a radiology report to demonstrate the DICOM viewer
6. **DICOM Viewer Demonstration**:
   - Point out the specialized viewing tools:
     - Zoom buttons: To zoom in/out of the image
     - Brightness/Contrast sliders: To adjust image visibility
     - Measurement tool: For precise measurements of structures
     - View mode tabs: Switch between standard and DICOM views
   - Show how doctors can examine the image in detail
   - Explain how this specialized viewer helps with diagnosis
   - Point out the download button for saving images
7. Return to the dashboard by clicking "Back to Dashboard"
8. **MongoDB Integration**: Explain that all activity is tracked in the MongoDB database

### Flow 4: Admin System Management
1. Log in with admin credentials
2. Show dashboard overview:
   - System statistics cards at the top
   - Quick action buttons for common tasks
3. Click "Manage Doctors" from sidebar
   - Show the "Add New Doctor" form
   - Fill out form with sample data:
     - Name: Dr. Sarah Johnson
     - Specialty: Radiology
     - Contact: 555-123-4567
     - Email: sarah.johnson@example.com
     - Address: 100 Medical Center Blvd
     - Location: Boston
   - Click "Add Doctor" button
   - Show success message when doctor is added
   - **MongoDB Integration**: Show in MongoDB Compass that the new doctor has been added to the database
4. Click "Reports & Analytics" from sidebar
   - Show the "Upload Medical Report" form
   - Fill in Patient ID (e.g., "P12345")
   - Select Report Type (e.g., "X-Ray")
   - Upload a sample image file
   - Click "Upload Report" button
   - Show success message
   - Point out the "Recent Uploads" section showing the new report
5. Click "Dashboard" to return to main view

## Button Functionality Reference Sheet

### Patient Portal Buttons
- **Schedule Appointment**: Opens appointment booking interface
- **View Appointments**: Shows past and upcoming appointments
- **Cancel**: Initiates appointment cancellation process
- **Confirm Cancellation**: Finalizes cancellation and updates database
- **Back to Profile**: Returns to main patient dashboard
- **Edit Profile**: Opens form to update personal information

### Doctor Dashboard Buttons
- **View Reports**: Opens medical report viewer with DICOM support
- **View Schedule**: Shows appointment calendar and daily agenda
- **Manage Patients**: Opens patient list and record access
- **View Analytics**: Displays performance metrics and statistics
- **Back to Dashboard**: Returns to main doctor view
- **Download**: Saves DICOM images or reports locally
- **Add Note**: Opens interface to add notes to patient records

### Admin Panel Buttons
- **Add Doctor**: Submits new doctor information to database
- **Upload Report**: Sends medical report file to the system
- **Refresh List**: Updates current view with latest database data
- **Delete**: Removes items from the system (with confirmation)
- **View Reports**: Opens report management section
- **Manage Doctors/Patients**: Navigates to respective management sections

## MongoDB Database Demonstration Points

### Show these collections during demonstration:
1. **appointments**: When booking or cancelling appointments
2. **doctors**: After adding a new doctor in admin panel
3. **users**: To show different user roles and authentication
4. **medicalReports**: After uploading a new medical report

### Key fields to point out:
- In appointments: status field changes from "scheduled" to "cancelled"
- In doctors: notice the specialty and location fields that patients can filter by
- In reports: see the connection between patient IDs and report metadata

## DICOM Viewer Quick Reference

### Main Features to Demonstrate:
- **Image Navigation**: Pan and zoom functionality
- **Brightness/Contrast**: Window/level adjustment sliders
- **Measurement Tools**: Distance and area measurements
- **View Modes**: Standard view and DICOM metadata view
- **Image Download**: Saving images for offline review

### Technical Talking Points:
- Specialized viewer designed for medical imaging standards
- Supports industry-standard DICOM format used by hospitals
- Integrated seamlessly with patient record system
- Critical for accurate radiological diagnosis

## Troubleshooting

### If MongoDB won't connect
- Ensure MongoDB is running locally
- Check connection string in .env file

### If pages don't load properly
- Verify both backend and frontend are running
- Check browser console for errors
- Ensure you're using a modern browser

### If appointment booking fails
- Check that all required fields are filled
- Verify the backend server is running
- Ensure MongoDB connection is active 