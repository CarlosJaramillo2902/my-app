import Productos from "./components/Productos";
import TarjetaProducto from "./components/TarjetaProducto";
import Usuarios from "./components/Usuarios";
import { Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Usuarios />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route exact path="/products/:id" element={<TarjetaProducto />} />
      </Routes>
    </div>
  );
}