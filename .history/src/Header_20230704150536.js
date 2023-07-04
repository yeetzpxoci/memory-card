import "./style.css"

function Header(props) {
    return (
        <div id="header">
            <span id='logo'>Memory of Isaac</span>
            <div id='score-container'>
                <span class='score'>Score:{props.score}</span>
                <span class='score'>High score:{props.highscore}</span>
            </div>
        </div>
    );
}

export default Header;
