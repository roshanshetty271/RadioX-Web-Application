import Products from '../components/Home/Products/products'
import Navbar from '../components/Home/NavBar/Navbar';
import HeroPage from '../components/Home/Hero/Hero';

const home = () => {
  return (
    <>
      
      <Navbar />
      <HeroPage />
      <Products/>
      
      {/* Add the rest of your application content here */}
    </>
  );
};

export default home;

