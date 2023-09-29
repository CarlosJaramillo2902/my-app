import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './TarjetaProducto.css';

function TarjetaProducto() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log("id-producto", id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const añadirCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoActual.push(product);
    localStorage.setItem("carrito", JSON.stringify(carritoActual));
  }

  return (
    <>
      {product ? (
        <>
        <div className="contenedorT">
          <h2>
            <i>{product.title} </i>
            por {product.price}
          </h2>
          <img width="150" height="350" he src={product.image} alt={product.category} />
          <p>{product.description}</p>
          <Link to={"/"} className="boton">Volver</Link>
          <Link to={"/"} onClick={añadirCarrito} className="botonCarrito">Añadir al Carrito</Link>
        </div>
        </>
      ) : (
        <div> loading... </div>
      )}
    </>
  );
}

export default TarjetaProducto;