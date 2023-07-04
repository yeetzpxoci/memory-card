import "./style.css"

function Card(props) {
    return (
        <div class="card">
            <img src={props.img}></img>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;
