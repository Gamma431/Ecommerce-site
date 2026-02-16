import ProductCard from "../components/ProductCard"
import { getProducts } from "../data/product"

export default function Home(){
    const products = getProducts()

    return (
        <div className="page">
            <div className="hero" id="hero">
                <h1>Welcome To Backstore</h1>
                <p>Discover our latest products at great price</p>
            </div>
            <div className="product-cont content-layout">
                <h2>Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}