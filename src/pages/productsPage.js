import {useSelector, useDispatch} from "react-redux";
import {add, fetchProducts} from "../store/cartSlice";
import {useEffect} from "react";

const ProductsPage = () => {
    const products = useSelector(state => state.cart.products.map(product => product.title))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

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
