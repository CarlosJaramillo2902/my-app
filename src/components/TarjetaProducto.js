import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context";
import './TarjetaProducto.css';

function TarjetaProducto() {
  const { id } = useParams();
  const { setProductId, selectedProduct } = useProducts();
  setProductId(id);

  const añadirCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoActual.push(selectedProduct);
    localStorage.setItem("carrito", JSON.stringify(carritoActual));
  }

  return (
    <>
      {selectedProduct ? (
        <>
          <div className="contenedorT">
            <h2>
              <i>{selectedProduct.title} </i>
              por {selectedProduct.price}
            </h2>
            <img width="150" height="350" he src={selectedProduct.image} alt={selectedProduct.category} />
            <p>{selectedProduct.description}</p>
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