import { Link } from "react-router-dom";
// Scoped JavaScript object
// CSS in JavaScript
import style from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={style.container}>
            <h1>This is Home Page</h1>
            <Link to="/pricing">Pricing</Link>&nbsp;&nbsp;
            <Link to="/product">Products</Link>
        </div>)
}

export default HomePage;