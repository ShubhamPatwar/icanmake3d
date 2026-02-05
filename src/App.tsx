import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Store from "./pages/Store";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import MustangShowroom from "./pages/MustangShowroom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/store" element={<Store />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mustang" element={<MustangShowroom />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
