import "./style.css"

function Card(props) {
    return (
        <div class="card" key={props.name} onClick={props.cardClicked}>
            <img src={props.src}></img>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;
