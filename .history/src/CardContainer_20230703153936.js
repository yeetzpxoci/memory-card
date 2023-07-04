import "./style.css"
import Card from "./Card";

function CardContainer(props) {
    const cardsDiv = props.cards.map(card => <Card>{card.name}</Card>);
    return (
        <div id="card-container">
            
        </div>
    );
}

export default CardContainer;
