import { useState, useEffect } from "react";

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
            <usuario>
              <div>{users.name.firstname[0]}{users.name.lastname[0]}</div>
            </usuario>
          </>
        ) : (
          <div> loading... </div>
        )}
      </>
    );
}
export default Usuarios