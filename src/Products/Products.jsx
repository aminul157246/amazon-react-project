import { useLoaderData } from "react-router-dom";
import Product from "../Product";

const Products = () => {
    const products = useLoaderData()
    console.log(products.products);
    
    
    return (
        <div className="grid grid-cols-3 gap-6 p-5">
            {
                products.products.map(product => <Product key={product.id} product = {product} ></Product> )
            }
        </div>
    ); 
};

export default Products;