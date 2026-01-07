import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/product" element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
}

export default App;