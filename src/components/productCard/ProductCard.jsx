
import Image from '../images/image.jsx';
import Button from '../UI/Button.jsx';
import { handelTxt } from '../../utils/functions.js';
const ProductCard = (props)=>{
     const { product } = props;
    return (
        <div className="border rounded-md p-2 flex flex-col  h-fit max-w-sm md:max-w-lg mx-auto md:mx-0 ">

            <Image
              className="w-full h-60"
              src={product.imageURL}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            <p className="text-gray-500">{handelTxt(product.description)}</p>

            <div className="flex my-3.5 space-x-2">
            <span className= "w-5 h-5 bg-red-500 rounded-full" />
            <span className= "w-5 h-5 bg-yellow-500 rounded-full" />
            <span className= "w-5 h-5 bg-blue-500 rounded-full" />
            </div>

            <div className="flex items-center justify-between">
                <span>${product.price}</span>
                <Image
                className={"w-10 h-10 rounded-full"}
                src={product.category.imageURL}
                alt={product.category.name}
                />
            </div>

            <div className="flex justify-between items-center space-x-2 my-2">
                <Button className="bg-indigo-500 hover:bg-indigo-800" width="w-full">EDIT</Button>
                <Button className="bg-red-500 hover:bg-red-800" width="w-full">DELETE</Button>
            </div>
             
        </div>
    )
}



export default ProductCard;