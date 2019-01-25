import React from "react";
import "./style.css";

class Header extends React.Component {

render () {
    return (
        <div>
            <header className="jumbotron">
                <h1 className="display-4">Clicky Game!</h1>
                <h2 className="lead">Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
            
        </div>
    )
}
}

export default Header;