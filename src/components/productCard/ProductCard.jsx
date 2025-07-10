
import Image from '../images/image.jsx';
import Button from '../UI/Button.jsx';
const ProductCard = ()=>{
    return (
        <div className="border rounded-md p-2 flex flex-col  h-fit">

            <Image
              className="w-full h-60"
              src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"
              alt={"product name"}
            />
            <h2>Product name</h2>
            <p className="text-gray-500">Product description goes here. It should be brief and informative.</p>

            <div className="flex my-3.5 space-x-2">
            <span className= "w-5 h-5 bg-red-500 rounded-full" />
            <span className= "w-5 h-5 bg-yellow-500 rounded-full" />
            <span className= "w-5 h-5 bg-blue-500 rounded-full" />
            </div>

            <div className="flex items-center justify-between">
                <span>$100</span>
                <Image
                className={"w-10 h-10 rounded-full"}
                src={"https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"}
                alt={"product name"}
                
                />
            </div>

            <div className="flex justify-between items-center space-x-2 my-2">
                <Button className="bg-indigo-500 ">EDIT</Button>
                <Button className="bg-red-500 p-3 w-full rounded-md text-lg font-bold items-center">DELETE</Button>
            </div>
             
        </div>
    )
}



export default ProductCard;