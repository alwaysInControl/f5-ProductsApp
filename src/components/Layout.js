import {useSelector} from "react-redux";

const Layout = () => {
    const cart = useSelector(state => state.cart.value)

    return (
        <nav>
            Your products: {cart}
        </nav>
    );
};

export default Layout;