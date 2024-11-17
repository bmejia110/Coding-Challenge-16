import React from "react";

const AddProductForm = ({ onAddProduct }) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const productName = event.target.productName.value;
        const productPrice = parseFloat(event.target.productPrice.value);
        const productDescription = event.target.productDescription.value;

        if(productName && !isNaN(productPrice) && productDescription) {
            onAddProduct({ 
                name: productName, 
                price: productPrice, 
                description: productDescription
            });
            event.target.reset();
        }
    };
        
        return (
            <form onSubmit={handleFormSubmit}>
                <h2>Add New Product</h2>
                <label>
                    Product Name:
                    <input type="text" name="productName" required />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="productPrice" required />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="productDescription" required />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        );
    };

