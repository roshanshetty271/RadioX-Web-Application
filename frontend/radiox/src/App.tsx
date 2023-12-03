// App.tsx
import React from 'react';
import CurvedBoxContainer from './home/CurvedBox';
import DoctorProfileSection from './home/DoctorProfileSection'; 

function App() {
  return (
    <div>
      <CurvedBoxContainer>
        {/* Text inside the box */}
        Your text content goes here
      </CurvedBoxContainer>

      {/* Add the DoctorProfileSection component below the CurvedBoxContainer */}
      <DoctorProfileSection />
    </div>
  );
}

export default App;
