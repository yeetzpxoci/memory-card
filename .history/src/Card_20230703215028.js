import "./style.css"

function Card(props) {
    return (
        <div class="card" onClick={console.log("hello")}>
            <img src={props.src}></img>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;
