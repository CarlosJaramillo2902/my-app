import Productos from "./components/Productos";
import TarjetaProducto from "./components/TarjetaProducto";
import Usuarios from "./components/Usuarios";
import CarritodeCompras from "./CarritodeCompras"
import { Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Usuarios />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route exact path="/productos/:id" element={<TarjetaProducto />} />
        <Route exact path="/carrito" element={<CarritodeCompras />} />
      </Routes>
    </div>
  );
}