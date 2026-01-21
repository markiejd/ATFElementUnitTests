import React, { useState } from "react";
import "../css/ButtonPage.css";
import "../css/index.css";


const ButtonPage = () => {
    const [buttonType, setButtonType] = useState("default");
    const [isToggled, setIsToggled] = useState(false); // Moved outside renderButton

    const handleClick = (type) => {
        alert(`${type} button clicked!`);
    };

    const renderButton = () => {
        return (
            <div className="button-container">
                {buttonType === "loading" && (
                    <button
                        className="btn btn-primary"
                        onClick={() => alert("Loading...")}
                        disabled
                    >
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Loading...
                    </button>
                )}
                {buttonType === "default" && (
                    <button className="btn btn-light" onClick={() => handleClick("Default")}>
                        Default Button
                    </button>
                )}
                {buttonType === "outline" && (
                    <button className="btn btn-outline-primary" onClick={() => handleClick("Outline")}>
                        Outline Button
                    </button>
                )}
                {buttonType === "disabled" && (
                    <button className="btn btn-primary" disabled onClick={() => handleClick("Disabled")}>
                        Disabled Button
                    </button>
                )}
                {buttonType === "icon" && (
                    <button className="btn btn-info" onClick={() => handleClick("Icon")}>
                        <i className="fa fa-check me-2"></i> Icon Button
                    </button>
                )}
                {buttonType === "block" && (
                    <button className="btn btn-success btn-block w-100" onClick={() => handleClick("Block")}>
                        Block Button
                    </button>
                )}
                {buttonType === "animated" && (
                    <button className="btn btn-warning animated-button" onClick={() => handleClick("Animated")}>
                        Animated Button
                    </button>
                )}
                {buttonType === "toggle" && (
                    <button
                        className={`btn ${isToggled ? "btn-success" : "btn-danger"}`}
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        {isToggled ? "Toggled On" : "Toggled Off"}
                    </button>
                )}
                {buttonType === "tooltip" && (
                    <button className="btn btn-primary" title="This is a tooltip" onClick={() => handleClick("Tooltip")}>
                        Tooltip Button
                    </button>
                )}
            </div>
        );
    };
    

    return (
        <div>
            <nav className="button-nav">
                <ul className="nav-list">
                    <li><button className="button-gradient" onClick={() => setButtonType("default")}>Default</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("outline")}>Outline</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("disabled")}>Disabled</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("loading")}>Loading</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("icon")}>Icon</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("block")}>Block</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("animated")}>Animated</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("toggle")}>Toggle</button></li>
                    <li><button className="button-gradient" onClick={() => setButtonType("tooltip")}>Tooltip</button></li>
                </ul>
            </nav>
            <div className="button-display">{renderButton()}</div>
        </div>
    );
};

export default ButtonPage;
