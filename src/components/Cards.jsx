// components/Cards.jsx

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/* Crear el componente Card.jsx que reciba como props la dirección de la imagen, el
título y la descripción, estos deben ser pasados desde App.jsx (2 Puntos) */

function Cards({ imgUrl, title, description }) {
    return (
        <Card style={{ width: "18rem", background: "#819ca9" }}>
            <Card.Img variant="top" src= {imgUrl} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {description} </Card.Text>
                <Button variant="danger">Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;