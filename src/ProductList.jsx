import React from "react";


function ProductList({products}) {
    return (
        <div>
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
            <ul>
                {products.map((product)=> (
                        <ProductItem key={product.id} product={product} />
                ))}
            </ul>
            )}
        </div>
    );
}

export default ProductList