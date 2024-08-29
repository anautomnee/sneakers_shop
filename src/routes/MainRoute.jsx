import { Routes, Route } from "react-router-dom";
import { Home, Cart, Contacts } from '../pages'

export const MainRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);
