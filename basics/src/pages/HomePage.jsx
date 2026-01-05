import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            <Link to="/pricing">Pricing</Link>
            <Link to="/product">Products</Link>
        </div>)
}

export default HomePage;