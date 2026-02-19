import { Link } from "react-router-dom"


export default function ProductCard({product}){
    return (
        <div className="product-card" key={product.id}>
            <img src={product.image} className="card-img" alt={product.name}/>
            <div className="card-content">

                <h3>{product.name}</h3>
                <p style={{color:"#017afe",fontFamily:"arial"}}>${product.price}</p>
                <div className="card-btn">
                    <Link className="Log-btn-secondary" style={{padding: "5px", width:"130px", fontSize: "16px"}}>View Details</Link>
                    <button className="Log-btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}