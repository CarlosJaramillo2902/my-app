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
        </div>
        </>
      ) : (
        <div> loading... </div>
      )}
    </>
  );
}

export default TarjetaProducto;