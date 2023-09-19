import { useState, useEffect } from "react";
import "./Productos.css";

function Productos() {
    const [index, setIndex] = useState(9);
    const [products, setProducts] = useState([]);
  
    function handleClick() {
      setIndex(index + 3);
    }
  
    let product = products[index];
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <>
        {product ? (
          <>
          <div className="contendor">
            {
               products.slice(0,index).map(mostrarProductos => (
                <div className="producto">
                  <h1>
                  {mostrarProductos.title}
                  </h1>
                  <img src={mostrarProductos.image} alt={mostrarProductos.category} />
                  <h2>
                    ${mostrarProductos.price}
                  </h2>
                  <p>{mostrarProductos.category}</p>
                  <p>{mostrarProductos.description}</p>
                </div>
               ))
            }
          </div>
          <button onClick={handleClick}>Ver más</button>
          </>
        ) : (
          <div> loading... </div>
        )}
      </>
    );
  }
  
  export default Productos;