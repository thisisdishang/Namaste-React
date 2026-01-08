import { Link } from "react-router-dom";
import "./MainNavigation.css"

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;