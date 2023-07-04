import "./style.css"

function Card(props) {
    return (
        <div class="card" onClick={props.cardClicked(props.id)}>
            <img src={props.src}></img>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;
