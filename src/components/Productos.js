import { useReducer, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { actions, initialState, productReducer } from "../reducer";
import './Productos.css';

function Productos() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { products, error } = state;
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  let visibleProducts = selectedCategory==="Todos"?products:products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actions.FETCH_PRODUCT_SUCCESS, payload: data })
      )
      .catch((e) =>
        dispatch({ type: actions.FETCH_PRODUCT_FAIL, payload: e.message })
      );
  }, []);

  return (
    <div className="contenedor">
      {error && <div>{error}</div>}
      <div className="filtro">
        <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
          <option value="Todos">All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
      {visibleProducts.map((product) => (
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