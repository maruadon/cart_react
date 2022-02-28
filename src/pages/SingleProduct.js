import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';



const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/products/${params._id}`)
         .then(resource => resource.json())
         .then (product => {
                setProduct(product);
            })
    },[params._id]);

    return (
    <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
            <div className="flex">
                <img src={product.image} alt="pizza" />
                <div className="p-6 bg-gray-100 items-center">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">siZe</div>
                    <div className="font-bold mt-2">{product.size}</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
  )
}

export default SingleProduct;