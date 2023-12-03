import Products from '../components/Home/Products/products'
import Navbar from '../components/Home/NavBar/Navbar';
import HeroPage from '../components/Home/Hero/Hero';
import CurvedBoxContainer from '../components/Home/corousal/CurvedBox';
import DoctorProfileSection from '../components/Home//corousal/DoctorProfileSection'; 
const home = () => {
  return (
    <>
      
      <Navbar />
      <HeroPage />
      <Products/>
      <CurvedBoxContainer/>
      <DoctorProfileSection/>
      {/* Add the rest of your application content here */}
    </>
  );
};

export default home;

