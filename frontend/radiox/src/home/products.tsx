import productSkeleton from '../images/productSkeleton.svg'
import "./products.css"
import chestXRay from "../images/x-ray.jpg"
import legXRay from "../images/leg x-ray.jpg"
import heartFailure from "../images/heart failure.jpg"
import strokeTBI from "../images/stroke&TBI.jpg"
import tbCare from "../images/TB Care.jpg"
import lungNodule from "../images/lung nodule.jpg"



const Products: React.FC = () => {


    return (
        <div className="parentContainer">
            <div className='container'>
                <div className="products-left">
                    <p>Products</p>
                    <div className='product-boxes'>
                        <div className="product-box">
                            <div className="overlay">
                                <p>Chest Radiography</p>
                            </div>
                            <img src={chestXRay} alt="chestXRay" />                                    
                        </div>
                        <div className="product-box">
                            <div className="overlay">
                                <p>Posterior-Anterior</p>
                            </div>
                            <img src={tbCare} alt="tbCare" />                                         
                        </div>
                        <div className="product-box">
                            <div className="overlay">
                                <p>Computed Tomography</p>
                            </div>                            
                            <img src={lungNodule} alt="xRay" />             
                        </div>
                        <div className="product-box">
                            <div className="overlay">
                                <p>Cerebro Vascular</p>
                            </div>
                            <img src={strokeTBI} alt="strokeTBI" />                 
                        </div>
                        <div className="product-box">
                            <div className="overlay">
                                <p>MII X-Ray</p>
                            </div>
                            <img src={legXRay} alt="legXRay" />                                          
                        </div>
                        <div className="product-box">
                            <div className="overlay">
                                <p>Coronary Angiogram</p>
                            </div>
                            <img src={heartFailure} alt="heartFailure" />
                        </div>
                    </div>
                    
                </div>
                <div className="products-right">
                    <img src={productSkeleton} alt="skeleton" />
                </div>
                
            </div>
            <div className="appointment">
                <p>Let's Book an Appointment</p>
                <button>View available slots</button>
            </div>
        </div>
        
    )
}

export default Products


// import React from 'react';
// import './products.css';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <div className="title">Products</div>
//       <div className="container">
//         <div className="left">
//           <div className="row">
//             <img src="image1.jpg" alt="Product 1" />
//             <img src="image2.jpg" alt="Product 2" />
//           </div>
//           <div className="row">
//             <img src="image3.jpg" alt="Product 3" />
//             <img src="image4.jpg" alt="Product 4" />
//           </div>
//           <div className="row">
//             <img src="image5.jpg" alt="Product 5" />
//             <img src="image6.jpg" alt="Product 6" />
//           </div>
//         </div>
//         <div className="right">
//           <img src="image7.jpg" alt="Product 7" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
