import "./style.css"

function Header(props) {
    return (
        <div id="header">
            <span id='logo'>Memory of Isaac</span>
            {props.score}
        </div>
    );
}

export default Header;
