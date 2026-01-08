import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import RootLayout from "./pages/RootLayout";
import NotFoundPage from "./pages/NotFoundPage";

// Nested Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/pricing", element: <PricingPage /> },
            { path: "/product", element: <ProductPage /> },
            { path: "*", element: <NotFoundPage /> }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App;