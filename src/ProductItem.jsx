import React from "react";
import ProductItem from "./ProductItem";

const ProductItem = ({product}) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </li>
    );
};

export default ProductItem;