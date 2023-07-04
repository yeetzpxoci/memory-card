import "./style.css"

function Header(props) {
    return (
        <div id="header">
            <span id='logo'>Memory of Isaac</span>
            <div id='score-container'>
                <span id='score'>Score:{props.score}</span>
                <span id='score'>High score:{props.score}</span>
            </div>
        </div>
    );
}

export default Header;
