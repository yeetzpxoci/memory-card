import "./style.css"

function Card(props) {

    const handleClick

    return (
        <div class="card" key={props.name} onClick={handleClick}>
            <img src={props.src}></img>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;
