import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Newarrival from "./components/Newarrival";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Hero />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new" element={<Newarrival />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
