import './App.css'
import ProductCard from './components/productCard/ProductCard'
import { productList } from '../data/data.js'

function App() {

  const productListRander = productList.map((product)=> <ProductCard key={product.id} product={product} />)

  return (
    <div className='p-5 h-auto grid grid-cols-1'>
      {productListRander}
    </div>
  )
}  

export default App
