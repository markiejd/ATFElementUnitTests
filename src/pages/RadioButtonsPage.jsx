import React, { useState } from "react";
import "../css/RadioButtonPage.css"; // Add styling for radio buttons
import { AiFillDelete } from "react-icons/ai"; // Import the delete icon
import "../css/index.css";

const RadioButtonPage = () => {
    const [radioType, setRadioType] = useState("default");
    const [selectedOption, setSelectedOption] = useState("");
    const [dynamicOptions, setDynamicOptions] = useState(["Option 1", "Option 2"]);
    const [newOption, setNewOption] = useState(""); // Store the name of the new option
    const [isParentChecked, setIsParentChecked] = useState(false); // For dependencies
    const [enableButtonOption, setEnableButtonOption] = useState(false); // For enabling in disabled function


    const addOption = () => {
        if (newOption.trim()) {
            setDynamicOptions([...dynamicOptions, newOption.trim()]);
            setNewOption(""); // Clear the input field
        }
    };

    const removeOption = (index) => {
        setDynamicOptions(dynamicOptions.filter((_, i) => i !== index));
    };

    const renderRadioButtons = () => {
        switch (radioType) {
            case "basic":
                return (
                    <div className="centered-content">
                        <h3>Basic Radio Buttons</h3>
                        <ul className="radio-list">
                            {dynamicOptions.map((option, index) => (
                                <li key={index} className="radio-item">
                                    <label>
                                        <input
                                            type="radio"
                                            name="basic-radio"
                                            value={option}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                        />
                                        {option}
                                    </label>
                                    <AiFillDelete
                                        className="delete-icon"
                                        onClick={() => removeOption(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                        <p>Selected Option: {selectedOption}</p>
                    </div>
                );
            case "dynamic":
                return (
                    <div className="centered-content">
                        <h3>Dynamic Radio Buttons</h3>
                        <ul className="radio-list">
                            {dynamicOptions.map((option, index) => (
                                <li key={index} className="radio-item">
                                    <label>
                                        <input
                                            type="radio"
                                            name="dynamic-radio"
                                            value={option}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                        />
                                        {option}
                                    </label>
                                    <AiFillDelete
                                        className="delete-icon"
                                        onClick={() => removeOption(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                        <p>Selected Option: {selectedOption}</p>
                    </div>
                );
                case "disabled":
                    return (
                        <div className="centered-content">
                            <h3>Disabled Radio Buttons</h3>
                            <label>
                                <input type="radio" name="disabled-radio" value="Option 1" disabled />
                                Disabled Option 1
                            </label>
                            <label>
                                <input type="radio" name="disabled-radio" value="Option 2" disabled />
                                Disabled Option 2
                            </label>
                            {enableButtonOption && (
                                <label>
                                    <input
                                        type="radio"
                                        name="enabled-radio"
                                        value="Enabled Option"
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                    />
                                    Enabled Option
                                </label>
                            )}
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => setEnableButtonOption(true)}
                            >
                                Add Accessible Option
                            </button>
                            <p>Selected Option: {selectedOption}</p>
                        </div>
                    );
            case "dependencies":
                return (
                    <div className="centered-content">
                        <h3>Radio Buttons with Dependencies</h3>
                        <label>
                            <input
                                type="checkbox"
                                checked={isParentChecked}
                                onChange={() => setIsParentChecked(!isParentChecked)}
                            />
                            Enable Options
                        </label>
                        <div>
                            {dynamicOptions.map((option, index) => (
                                <label key={index} className="radio-dependent">
                                    <input
                                        type="radio"
                                        name="dependent-radio"
                                        value={option}
                                        disabled={!isParentChecked}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                        <p>Selected Option: {selectedOption}</p>
                    </div>
                );
            default:
                return (
                    <p className="text-muted centered-content">
                        Select a radio button type from the navigation above to view its functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setRadioType("basic")}>
                            Basic Radio
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setRadioType("dynamic")}>
                            Dynamic Radio
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setRadioType("disabled")}>
                            Disabled Radio
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setRadioType("dependencies")}>
                            Radio with Dependencies
                        </button>
                    </li>
                </ul>
            </nav>
            {(radioType === "dependencies" || radioType === "dynamic") && (
                <div className="centered-content">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter new radio button name"
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                    />
                    <button className="btn btn-primary add-item-button" onClick={addOption}>
                        Add Radio Button
                    </button>
                </div>
            )}

            <div className="radio-display">{renderRadioButtons()}</div>
        </div>
    );
};

export default RadioButtonPage;
