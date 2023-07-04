import "./style.css"
import Card from "./Card";

function CardContainer(props) {
    const cardsDiv = props.cards.map(card => <Card id={card.id} name={card.name} src={card.src} cardClicked={props.cardClicked}></Card>);

    return (
        <div id="card-container">
            {cardsDiv}
        </div>
    );
}

export default CardContainer;
