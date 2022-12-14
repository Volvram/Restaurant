import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenuItem({dish, onClick}){      // Объявление компонента

    return(
        <Card onClick = {() => onClick(dish.id)}>
            <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}    
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">  {/* Атритуб key для уникальной идентификации каждого элемента в реакт*/}
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {menu}      {/* Переменная внутри синтаксиса JSX */}
            </div>
        </div>
    );
}

export default Menu;