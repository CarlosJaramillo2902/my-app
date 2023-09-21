import { useState, useEffect } from "react";
import "./Productos.css";

function Productos() {
    const [index, setIndex] = useState(10);
    const [products, setProducts] = useState([]);
    const [mostrarBoton, setmostrarBoton] = useState([true])
  
    function handleClick() {
      setIndex(20);
      setmostrarBoton(false);
    }
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <>
        {products ? (
          <>
          <div className="contenedor">
            {
               products.slice(0,index).map((mostrarProductos) => (
                <div className="producto">
                  <h1>
                  {mostrarProductos.title}
                  </h1>
                  <img src={mostrarProductos.image} alt={mostrarProductos.category} />
                  <h2>
                    ${mostrarProductos.price}
                  </h2>
                  <p>{mostrarProductos.description}</p>
                </div>
               ))
            }
          </div>
          {mostrarBoton &&(
            <button onClick={handleClick}>VER MÁS</button>
          )}          
          </>
        ) : (
          <div> loading... </div>
        )}
      </>
    );
  }
  
  export default Productos;