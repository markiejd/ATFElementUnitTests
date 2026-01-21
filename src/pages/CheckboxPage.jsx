import React, { useState } from "react";
import "../css/CheckboxPage.css"; // Add styling for checkboxes
import "../css/index.css";

const CheckboxPage = () => {
    const [checkboxType, setCheckboxType] = useState("default");
    const [isChecked, setIsChecked] = useState(false);
    const [groupChecked, setGroupChecked] = useState([false, false, false]);
    const [checkboxes, setCheckboxes] = useState(["Option 1", "Option 2"]);
    const [isParentChecked, setIsParentChecked] = useState(false); // For dependencies
    const [checkboxOptions] = useState(["Option 1", "Option 2", "Option 3"]);


    const toggleCheck = () => setIsChecked(!isChecked);

    const toggleGroupCheck = (index) => {
        const updatedGroup = [...groupChecked];
        updatedGroup[index] = !updatedGroup[index];
        setGroupChecked(updatedGroup);
    };

    const addCheckbox = () => {
        const newOption = `Option ${checkboxes.length + 1}`;
        setCheckboxes([...checkboxes, newOption]);
    };

    const removeCheckbox = () => {
        if (checkboxes.length > 0) {
            setCheckboxes(checkboxes.slice(0, -1));
        }
    };

    const handleConfirmSelection = () => {
        const selectedOptions = checkboxOptions.filter((_, index) => groupChecked[index]);
        if (selectedOptions.length > 0) {
            alert(`Selected Checkboxes: ${selectedOptions.join(", ")}`);
        } else {
            alert("No checkboxes selected.");
        }
    };

    const renderCheckbox = () => {
        switch (checkboxType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Checkboxes</h3>
                        <label>
                            <input type="checkbox" checked={isChecked} onChange={toggleCheck} />
                            Basic Checkbox
                        </label>
                    </div>
                );
            case "indeterminate":
                return (
                    <div>
                        <h3>Indeterminate Checkbox</h3>
                        <label>
                            <input
                                type="checkbox"
                                ref={(el) => el && (el.indeterminate = !isChecked)}
                                onClick={toggleCheck}
                            />
                            Indeterminate Checkbox
                        </label>
                    </div>
                );
                case "group":
                    return (
                        <div>
                            <h3>Checkbox Group with Confirmation</h3>
                            {checkboxOptions.map((option, index) => (
                                <label key={index} className="me-3">
                                    <input
                                        type="checkbox"
                                        checked={groupChecked[index]}
                                        onChange={() => toggleGroupCheck(index)}
                                    />
                                    {option}
                                </label>
                            ))}
                            <div className="mt-3">
                                <button className="btn btn-success" onClick={handleConfirmSelection}>
                                    Confirm Selection
                                </button>
                            </div>
                        </div>
                    );
            case "master":
                const isAllSelected = groupChecked.every(Boolean);
                return (
                    <div>
                        <h3>Master Checkbox</h3>
                        <label>
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={() =>
                                    setGroupChecked(groupChecked.map(() => !isAllSelected))
                                }
                            />
                            Select All
                        </label>
                        {groupChecked.map((checked, index) => (
                            <label key={index} className="me-3">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => toggleGroupCheck(index)}
                                />
                                Option {index + 1}
                            </label>
                        ))}
                    </div>
                );
            case "validation":
                const isAnyChecked = groupChecked.some(Boolean);
                return (
                    <div>
                        <h3>Checkbox Validation</h3>
                        {groupChecked.map((checked, index) => (
                            <label key={index} className="me-3">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => toggleGroupCheck(index)}
                                />
                                Option {index + 1}
                            </label>
                        ))}
                        {!isAnyChecked && (
                            <p className="text">At least one checkbox must be selected!</p>
                        )}
                    </div>
                );
            case "tooltip":
                return (
                    <div>
                        <h3>Checkbox with Tooltip</h3>
                        {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                            <label key={index} title={`More info about ${option}`} className="me-3">
                                <input type="checkbox" />
                                {option}
                            </label>
                        ))}
                    </div>
                );
            case "readonly":
                return (
                    <div>
                        <h3>Read-Only Checkboxes</h3>
                        {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                            <label key={index} className="me-3">
                                <input type="checkbox" checked={true} readOnly />
                                {option}
                            </label>
                        ))}
                    </div>
                );
            
            case "dependencies":
                return (
                    <div>
                        <h3>Checkbox with Dependencies</h3>
                        <label>
                            <input
                                type="checkbox"
                                checked={isParentChecked}
                                onChange={(e) => setIsParentChecked(e.target.checked)}
                            />
                            Enable Options
                        </label>
                        {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                            <label key={index} className="me-3">
                                <input type="checkbox" disabled={!isParentChecked} />
                                {option}
                            </label>
                        ))}
                    </div>
                );
            case "dynamic":
                return (
                    <div>
                        <h3>Dynamic Checkboxes</h3>
                        {checkboxes.map((option, index) => (
                            <label key={index} className="me-3">
                                <input type="checkbox" />
                                {option}
                            </label>
                        ))}
                        <div className="mt-2">
                            <button className="btn btn-primary me-2" onClick={addCheckbox}>
                                Add Checkbox
                            </button>
                            <button className="btn btn-danger" onClick={removeCheckbox}>
                                Remove Checkbox
                            </button>
                        </div>
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select a checkbox type from the navigation above to view its functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("basic")}>Basic Checkbox</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("indeterminate")}>
                            Indeterminate Checkbox
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("group")}>Checkbox Group</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("dynamic")}>Dynamic Checkboxes</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("master")}>Master Checkbox</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("validation")}>
                            Validation Checkbox
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("tooltip")}>Checkbox with Tooltip</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("readonly")}>Read-Only Checkboxes</button>
                    </li>

                    <li>
                        <button className="button-gradient" onClick={() => setCheckboxType("dependencies")}>
                            Checkbox with Dependencies
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="checkbox-display">{renderCheckbox()}</div>
        </div>
    );
};

export default CheckboxPage;
