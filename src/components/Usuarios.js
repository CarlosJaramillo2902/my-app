import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Usuarios.css";

function Usuarios(){
    const [users, setUsers] = useState(null);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/users/8")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);
    return (
      <>
        {users ? (
          <>
            <div className="usuario">
              <div className="nombre">{users.name.firstname[0]}{users.name.lastname[0]}</div>
              <Link to={"/carrito"}>
                <button className="carrito" alt="Carrito de Compras"></button>
              </Link>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </>
    );
}
export default Usuarios