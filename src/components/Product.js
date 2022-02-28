import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from  "../CartContext";

const Product = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  // console.log(props);
  const { product } = props;

  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = {...cart}; // { items: {}} no item in the object just copyed it BECause if we modify original cart then previous value will delete
    if (!_cart.items) {
        _cart.items = {}
        //if there is nothing then we add empty object
    }
    if (_cart.items[product._id]) {
        _cart.items[product._id] += 1; //if the product id matched then it is already there before, add 1
    } else {
        _cart.items[product._id] = 1; //else it is first time it clicks ,so initiate the id of product with 1 
    }

    if(!_cart.totalItems) {
        _cart.totalItems = 0; //if no totalitem ,then we have to add 0 , therwise calculation will be undefined
    }
    _cart.totalItems += 1;
    setCart(_cart); //after all condition we have to pass to card by using setCart.its parameter will _cart 
    setIsAdding(true);
    setTimeout(() => {
        setIsAdding(false);
    }, 1000);
    //
    // const cart = {
    //     items: {
    //         '608c2960e165f6137f02b552': 2,
    //         '608c28e8e165f6137f02b550': 3
    //     },
    //     totalItems: 5
    // }

}

  return (
    <Link to={`/products/${product._id}`}>
      <div className="bg-gray-100 py-1">
      <img src={product.image} alt="pizza" />
      <div className="text-center">
        <h2 className="font-bold py-2 text-lg">{product.name}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          {product.size}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4 mb-4 mx-2">
        <span>${product.price}</span>
        <button onClick={(e) => { addToCart(e,product)}} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED' : ''}</button>
      </div>
    </div>
    </Link>
  );
};

export default Product;
