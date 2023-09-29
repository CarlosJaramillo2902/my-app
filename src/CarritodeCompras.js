import { Link } from "react-router-dom";
import './CarritodeCompras.css';

const productosC = JSON.parse(localStorage.getItem("carrito")) || [];

function CarritodeCompras(){
    return(
        <div className='contenedor'>
            <h1>Carrito de Compras</h1>
            <div className="productos">
                {productosC.map((producto) => (
                    <div className="producto">
                        <i>{producto.title} </i>
                        por {producto.price}
                        <img
                            width="150"
                            height="150"
                            he
                            src={producto.image}
                            alt={producto.category}
                        />
                    </div>
                ))}
                
            </div>
            <Link to={`/`} className="boton">Inicio</Link>
        </div>
    )
}
export default CarritodeCompras;