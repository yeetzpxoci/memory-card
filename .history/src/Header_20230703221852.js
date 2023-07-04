import "./style.css"

function Header(props) {
    return (
        <div id="header">
            {props.score}
        </div>
    );
}

export default Header;
