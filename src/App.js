import "./App.css";
import Landing from "./pages/Landing";
import ViewProduct from "./pages/ViewProduct";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";

function App() {
  return (
    <Router>
      <Navber />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/view" element={<ViewProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>

      
    </Router>

  );
}
export default App;
