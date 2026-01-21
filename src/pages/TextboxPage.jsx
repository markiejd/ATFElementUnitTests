import React, { useState } from "react";
import "../css/TextboxPage.css"; // Add styling for textboxes
import "../css/index.css";

const TextboxPage = () => {
    const [textboxType, setTextboxType] = useState("default");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [controlledValue, setControlledValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };



    const handleSearch = () => {
        alert(`Searching for: ${searchValue}`);
    };

    const renderTextbox = () => {
        switch (textboxType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Textbox</h3>
                        <input
                            type="text"
                            placeholder="Enter text"
                            className="textbox-basic"
                        />
                    </div>
                );
            case "password":
                return (
                    <div>
                        <h3>Password Textbox</h3>
                        <div className="password-container">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Enter password"
                                className="textbox-password"
                            />
                            <button
                                className="btn btn-sm btn-primary toggle-visibility"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                );
            case "controlled":
                return (
                    <div>
                        <h3>Controlled Textbox</h3>
                        <input
                            type="text"
                            value={controlledValue}
                            placeholder="Type something"
                            className="textbox-controlled"
                            onChange={(e) => setControlledValue(e.target.value)}
                        />
                        <p>Value: {controlledValue}</p>
                    </div>
                );
            case "search":
                return (
                    <div>
                        <h3>Search Textbox</h3>
                        <div className="search-container">
                            <input
                                type="text"
                                value={searchValue}
                                placeholder="Search something"
                                className="textbox-search"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                );
            
            default:
                return (
                    <p className="text-muted">
                        Select a textbox type from the navigation above to view its
                        functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setTextboxType("basic")}>
                            Basic Textbox
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTextboxType("password")}>
                            Password Textbox
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTextboxType("controlled")}>
                            Controlled Textbox
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTextboxType("search")}>
                            Search Textbox
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="textbox-display">{renderTextbox()}</div>
        </div>
    );
};

export default TextboxPage;
