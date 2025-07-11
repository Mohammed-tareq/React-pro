import "./App.css";
import ProductCard from "./components/productCard/ProductCard";
import Button from "./components/UI/Button.jsx";
import Model from "./components/UI/model.jsx";
import { productList } from "./data/data.js";
import { useState } from "react";

function App() {

     const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }


  const productListRander = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container mx-auto">

      <div className="p-5 rounded-lg flex justify-between items-center">
      <h1 className="text-3xl font-bold text-center my-5">Product List</h1>
      <Button className="bg-indigo-500 hover:bg-indigo-600" width="w-fit" onClick={open}>Add New Product</Button>
      </div>

      <div className="p-5 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
        {productListRander}
        <Model isOpen={isOpen} close={close} open={open} title="Add New product ">
          <div className="flex items-center space-x-2">

          <Button className="bg-indigo-500 hover:bg-indigo-600" >Submit</Button>
          <Button className="bg-red-500 hover:bg-red-600" onClick={close}>Close</Button>
          </div>
          </Model>
      </div>
    </main>
  );
}

export default App;
