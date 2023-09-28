import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Productos.css';

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="contenedor">
      {products.map((product) => (
        <div className="producto">
          <i>{product.title} </i>
          por {product.price}
          <img
            width="150"
            height="150"
            he
            src={product.image}
            alt={product.category}
          />
          <Link to={`products/${product.id}`} className="boton">Ver mas...</Link>
        </div>
      ))}
    </div>
  );
}

export default Productos;