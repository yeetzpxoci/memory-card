import "./style.css"
import Card from "./Card";

function CardContainer(props) {
    const cardsDiv = props.cards.map(card => <Card name={card.name} src={card.img}></Card>);

    return (
        <div id="card-container">
            {cardsDiv}
        </div>
    );
}

export default CardContainer;
