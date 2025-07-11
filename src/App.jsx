import "./App.css";
import ProductCard from "./components/productCard/ProductCard";
import { productList } from "./data/data.js";

function App() {
  const productListRander = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container mx-auto">
      <div className="p-5 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
        {productListRander}
      </div>
    </main>
  );
}

export default App;
