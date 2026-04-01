import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist.jsx";

function App() {
  
  return (
    <BrowserRouter>
      
      {/* Routes stay clean */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;