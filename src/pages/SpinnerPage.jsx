import React, { useState } from "react";
import "../css/SpinnerPage.css"; // Add styling for spinners
import "../css/index.css";
import { FaTrash } from "react-icons/fa"; // Bin icon for deleting spinners

const SpinnerPage = () => {
    const [spinnerType, setSpinnerType] = useState("default");
    const [dynamicSpinners, setDynamicSpinners] = useState([
        { id: 1, style: "circular", outerColor: "#cccccc", innerColor: "#000000" },
    ]);
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(true);
    const [timedSpinners, setTimedSpinners] = useState([]);
    const [timerInput, setTimerInput] = useState(0);

    const addSpinner = () => {
        const newId = dynamicSpinners.length + 1;
        setDynamicSpinners([
            ...dynamicSpinners,
            { id: newId, style: "circular", outerColor: "#cccccc", innerColor: "#000000" },
        ]);
    };

    const addTimedSpinner = () => {
        if (timerInput > 0) {
            const newSpinner = {
                id: timedSpinners.length + 1,
                timeLeft: timerInput,
                style: "circular",
            };
            setTimedSpinners([...timedSpinners, newSpinner]);

            // Start countdown for the spinner
            const interval = setInterval(() => {
                setTimedSpinners((prevSpinners) =>
                    prevSpinners
                        .map((spinner) =>
                            spinner.id === newSpinner.id
                                ? { ...spinner, timeLeft: spinner.timeLeft - 1 }
                                : spinner
                        )
                        .filter((spinner) => spinner.timeLeft > 0) // Remove spinner when time reaches 0
                );
            }, 1000);

            setTimeout(() => clearInterval(interval), timerInput * 1000);
        }
    };


    const updateSpinnerColor = (id, type, color) => {
        const updatedSpinners = dynamicSpinners.map((spinner) =>
            spinner.id === id ? { ...spinner, [type]: color } : spinner
        );
        setDynamicSpinners(updatedSpinners);
    };

    const updateSpinnerStyle = (id, style) => {
        const updatedSpinners = dynamicSpinners.map((spinner) =>
            spinner.id === id ? { ...spinner, style } : spinner
        );
        setDynamicSpinners(updatedSpinners);
    };

    const removeSpinner = (id) => {
        setDynamicSpinners(dynamicSpinners.filter((spinner) => spinner.id !== id));
    };

    const toggleSpinner = () => {
        setIsSpinnerVisible(!isSpinnerVisible);
    };

    const renderSpinner = (spinner) => {
        const spinnerStyles = {
            circular: (
                <div
                    className="spinner spinner-circular"
                    style={{
                        borderColor: spinner.outerColor,
                        borderTopColor: spinner.innerColor,
                    }}
                ></div>
            ),
            dualRing: (
                <div
                    className="spinner spinner-dual-ring"
                    style={{
                        borderColor: spinner.outerColor,
                        borderTopColor: spinner.innerColor,
                    }}
                ></div>
            ),
            dots: (
                <div className="spinner spinner-dots">
                    <div style={{ backgroundColor: spinner.innerColor }}></div>
                    <div style={{ backgroundColor: spinner.innerColor }}></div>
                    <div style={{ backgroundColor: spinner.innerColor }}></div>
                </div>
            ),
        };
        return spinnerStyles[spinner.style];
    };
    const renderTimedSpinners = () => (
        <div>
            <h3>Timed Spinners</h3>
            <div className="timed-spinner-container">
                {timedSpinners.map((spinner) => (
                    <div key={spinner.id} className="spinner-timed-wrapper">
                        <div className="spinner spinner-circular"></div>
                        <p>{spinner.timeLeft}s remaining</p>
                    </div>
                ))}
            </div>
            <div className="mt-2">
                <input
                    type="number"
                    min="1"
                    className="form-control d-inline-block me-2"
                    value={timerInput}
                    onChange={(e) => setTimerInput(parseInt(e.target.value, 10))}
                    placeholder="Enter time in seconds"
                />
                <button className="btn btn-primary" onClick={addTimedSpinner}>
                    Add Timed Spinner
                </button>
            </div>
        </div>
    );

    const renderDynamicSpinners = () => (
        <div>
            <h3>Dynamic Spinners</h3>
            <div className="spinner-container">
                {dynamicSpinners.map((spinner) => (
                    <div key={spinner.id} className="spinner-dynamic-wrapper">
                        {renderSpinner(spinner)}
                        <label>
                            Outer Color:
                            <input
                                type="color"
                                value={spinner.outerColor}
                                onChange={(e) => updateSpinnerColor(spinner.id, "outerColor", e.target.value)}
                            />
                        </label>
                        <label>
                            Inner Color:
                            <input
                                type="color"
                                value={spinner.innerColor}
                                onChange={(e) => updateSpinnerColor(spinner.id, "innerColor", e.target.value)}
                            />
                        </label>
                        <label>
                            Style:
                            <select
                                value={spinner.style}
                                onChange={(e) => updateSpinnerStyle(spinner.id, e.target.value)}
                            >
                                <option value="circular">Circular</option>
                                <option value="dualRing">Dual Ring</option>
                                <option value="dots">Dots</option>
                            </select>
                        </label>
                        <FaTrash
                            className="bin-icon"
                            onClick={() => removeSpinner(spinner.id)}
                            title="Delete Spinner"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-2">
                <button className="btn btn-primary me-2" onClick={addSpinner}>
                    Add Spinner
                </button>
            </div>
        </div>
    );

    const renderSpinnerOptions = () => {
        switch (spinnerType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Spinner</h3>
                        <div className="spinner spinner-basic"></div>
                    </div>
                );
    
            case "colored":
                return (
                    <div>
                        <h3>Colored Spinners</h3>
                        <div className="spinner spinner-primary"></div>
                        <div className="spinner spinner-secondary"></div>
                        <div className="spinner spinner-success"></div>
                        <div className="spinner spinner-danger"></div>
                    </div>
                );
    
            case "sizes":
                return (
                    <div>
                        <h3>Size Variants</h3>
                        <div className="spinner spinner-small"></div>
                        <div className="spinner spinner-medium"></div>
                        <div className="spinner spinner-large"></div>
                    </div>
                );
    
            case "dynamic":
                return (
                    <div>
                        <h3>Dynamic Spinners</h3>
                        <div className="spinner-container">
                            {dynamicSpinners.map((spinner) => (
                                <div key={spinner.id} className="spinner-dynamic-wrapper">
                                    {renderSpinner(spinner)}
                                    <label>
                                        Outer Color:
                                        <input
                                            type="color"
                                            value={spinner.outerColor}
                                            onChange={(e) => updateSpinnerColor(spinner.id, "outerColor", e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Inner Color:
                                        <input
                                            type="color"
                                            value={spinner.innerColor}
                                            onChange={(e) => updateSpinnerColor(spinner.id, "innerColor", e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Style:
                                        <select
                                            value={spinner.style}
                                            onChange={(e) => updateSpinnerStyle(spinner.id, e.target.value)}
                                        >
                                            <option value="circular">Circular</option>
                                            <option value="dualRing">Dual Ring</option>
                                            <option value="dots">Dots</option>
                                        </select>
                                    </label>
                                    <FaTrash
                                        className="bin-icon"
                                        onClick={() => removeSpinner(spinner.id)}
                                        title="Delete Spinner"
                                    />
                                </div>
                            ))}
                        </div>
    
                        {/* Buttons Section with Proper Spacing */}
                        <div className="spinner-buttons">
                            <button className="btn btn-primary" onClick={addSpinner}>
                                Add Spinner
                            </button>
                        </div>
                    </div>
                );
    
            case "controlled":
                return (
                    <div>
                        <h3>Controlled Spinner</h3>
                        {isSpinnerVisible && <div className="spinner spinner-controlled"></div>}
                        
                        {/* Buttons Section with Proper Spacing */}
                        <div className="spinner-buttons">
                            <button className="btn btn-primary" onClick={toggleSpinner}>
                                {isSpinnerVisible ? "Hide Spinner" : "Show Spinner"}
                            </button>
                        </div>
                    </div>
                );
    
            case "timed":
                return (
                    <div>
                        <h3>Timed Spinners</h3>
                        <div className="timed-spinner-container">
                            {timedSpinners.map((spinner) => (
                                <div key={spinner.id} className="spinner-timed-wrapper">
                                    <div className="spinner spinner-circular"></div>
                                    <p>{spinner.timeLeft}s remaining</p>
                                </div>
                            ))}
                        </div>
    
                        <div className="mt-2">
                            <input
                                type="number"
                                min="1"
                                className="form-control d-inline-block me-2"
                                value={timerInput}
                                onChange={(e) => setTimerInput(parseInt(e.target.value, 10))}
                                placeholder="Enter time in seconds"
                            />
                            
                            {/* Buttons Section with Proper Spacing */}
                            <div className="spinner-buttons">
                                <button className="btn btn-primary" onClick={addTimedSpinner}>
                                    Add Timed Spinner
                                </button>
                            </div>
                        </div>
                    </div>
                );
    
            default:
                return (
                    <p className="text-muted">
                        Select a spinner type from the navigation above to view its functionality.
                    </p>
                );
        }
    };
    

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setSpinnerType("basic")}>
                            Basic Spinner
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpinnerType("colored")}>
                            Colored Spinners
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpinnerType("sizes")}>
                            Size Variants
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpinnerType("dynamic")}>
                            Dynamic Spinners
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpinnerType("controlled")}>
                            Controlled Spinner
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpinnerType("timed")}>
                            Timed Spinners
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="spinner-display">{renderSpinnerOptions()}</div>
        </div>
    );
};

export default SpinnerPage;
