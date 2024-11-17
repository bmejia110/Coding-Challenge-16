import { useState } from 'react';
import ProductList from './ProductList';
import AddproductForm from './AddProductForm';


const App = () => {
  const [products, setProducts] = useState([
    {id: 1, name: "Gaming PC", price: 1300, description: "Powerful Gaming PC"},
    {id: 2, name: "Phone", price: 700, description: "A minimal smartphone"},
  ]);

  //add new product

  const addProduct = (newProduct) => {
    setProducts([
      products,
      {id: products.length + 1, newProduct}
    ]);
  };
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddproductForm onAddProduct={addProduct} />
    </div>
  );
};

export default App;
