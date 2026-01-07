import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/pricing",
        element: <PricingPage />
    },
    {
        path: "/product",
        element: <ProductPage />
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App;