import './products.css'
import skeleton from "../images/productSkeleton.svg";

function Products(){
    return (
        <div className="container">
            <div>
                <p>Products</p> 
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <img src={skeleton} alt="" />
            </div>          
        </div>
    )
}

export default Products