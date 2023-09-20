import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productDetails = useLoaderData()
    console.log(productDetails);
    const {id, images, title, description, price} = productDetails;
    return (
        <div className="max-w-4xl mx-auto">
            <img src={images[0]} alt="" />
            <h2 className="  text-3xl font-bold">{title}</h2>
            <p><small>{description}</small></p>
        </div>
    );
};

export default ProductDetails;