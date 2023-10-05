import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { actions, initialState, productReducer } from "../reducer";
import './Productos.css';

function Productos() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const {products, error} = state

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => 
        dispatch({type: actions.FETCH_PRODUCT_SUCCESS, payload: data})
      )
      .catch((e) =>
        dispatch({type: actions.FETCH_PRODUCT_FAIL, payload: e.message})
      );
  }, []);

  return (
    <div className="contenedor">
      {error && <div>{error}</div>}
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
          <Link to={`productos/${product.id}`} className="boton">Ver mas...</Link>
        </div>
      ))}
    </div>
  );
}

export default Productos;