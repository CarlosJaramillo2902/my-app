import { useState, useEffect } from "react";
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
            </div>
          </>
        ) : (
          <div></div>
        )}
      </>
    );
}
export default Usuarios