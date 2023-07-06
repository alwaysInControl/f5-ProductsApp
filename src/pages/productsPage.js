import {useSelector, useDispatch} from "react-redux";
import {add} from "../store/cartSlice";

const ProductsPage = () => {
    const products = useSelector(state => state.cart.products.map(product => product.name))
    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {products.map((product, index) => <li key={index}>
                    {product} <button onClick={() => dispatch(add())}>Add to my cart</button>
                </li>)}
            </ul>
        </div>
    );
};

export default ProductsPage;
