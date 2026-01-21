import React, { useState } from "react";
import "../css/DropdownPage.css"; // Add styling for dropdowns
import "../css/index.css";

const DropdownPage = () => {
    const [dropdownType, setDropdownType] = useState("default");
    const [selectedOption, setSelectedOption] = useState("");
    const [multiSelectedOptions, setMultiSelectedOptions] = useState([]);
    const [dynamicOptions, setDynamicOptions] = useState(["Option 1", "Option 2"]);

    const addOption = () => {
        const newOption = `Option ${dynamicOptions.length + 1}`;
        setDynamicOptions([...dynamicOptions, newOption]);
    };

    const removeOption = () => {
        if (dynamicOptions.length > 0) {
            setDynamicOptions(dynamicOptions.slice(0, -1));
        }
    };

    const handleMultiSelect = (option) => {
        if (multiSelectedOptions.includes(option)) {
            setMultiSelectedOptions(
                multiSelectedOptions.filter((item) => item !== option)
            );
        } else {
            setMultiSelectedOptions([...multiSelectedOptions, option]);
        }
    };

    const [searchQuery, setSearchQuery] = useState("");
                
    const filteredOptions = dynamicOptions.filter((option) =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const [newOption, setNewOption] = useState("");

    const handleAddOptionWithInput = () => {
        if (newOption.trim()) {
            setDynamicOptions([...dynamicOptions, newOption.trim()]);
            setNewOption("");
        }
    };
                
                

    const renderDropdown = () => {
        switch (dropdownType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Dropdown</h3>
                        <select
                            className="dropdown"
                            onChange={(e) => alert(`Selected: ${e.target.value}`)}
                        >
                            <option value="" disabled selected>
                                Select an option
                            </option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                );
                case "searchable":
    return (
        <div className="searchable-container">
            <h3>Searchable Dropdown</h3>
            <input
                type="text"
                placeholder="Search options..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select className="styled-dropdown">
                <option value="" disabled selected>
                    Select an option
                </option>
                {filteredOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );

                    case "grouped":
    const groupedOptions = {
        Fruits: ["Apple", "Banana", "Cherry"],
        Vegetables: ["Carrot", "Broccoli", "Spinach"],
    };

    return (
        <div>
            <h3>Grouped Dropdown</h3>
            <select className="dropdown">
                <option value="" disabled selected>
                    Select an option
                </option>
                {Object.entries(groupedOptions).map(([category, options], index) => (
                    <optgroup key={index} label={category}>
                        {options.map((option, idx) => (
                            <option key={idx} value={option}>
                                {option}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
    case "disabledOptions":
    return (
        <div>
            <h3>Dropdown with Disabled Options</h3>
            <select className="dropdown">
                <option value="" disabled selected>
                    Select an option
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2" disabled>
                    Option 2 (Unavailable)
                </option>
                <option value="Option 3">Option 3</option>
            </select>
        </div>
    );
    case "dynamicWithInput":
    return (
        <div>
            <h3>Dynamic Dropdown with User-Entered Options</h3>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter new option..."
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAddOptionWithInput}>
                    Add Option
                </button>
            </div>
            <select className="dropdown">
                <option value="" disabled selected>
                    Select an option
                </option>
                {dynamicOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            
        </div>
    );

    case "tooltipDropdown":
    const optionsWithTooltips = [
        { value: "Option 1", tooltip: "This is option 1" },
        { value: "Option 2", tooltip: "This is option 2" },
        { value: "Option 3", tooltip: "This is option 3" },
    ];

    return (
        <div>
            <h3>Dropdown with Tooltips</h3>
            <select className="dropdown">
                <option value="" disabled selected>
                    Select an option
                </option>
                {optionsWithTooltips.map((option, index) => (
                    <option key={index} value={option.value} title={option.tooltip}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
    case "animated":
        return (
            <div>
                <h3>Animated Dropdown</h3>
                <select className="dropdown animated-dropdown">
                    <option value="" disabled selected>
                        Select an option
                    </option>
                    {dynamicOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    


                








        case "dynamic":
            return (
                <div>
                    <h3>Dynamic Dropdown</h3>
                    <select className="dropdown">
                        <option value="" disabled selected>
                            Select an option
                        </option>
                        {dynamicOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {/* Remove container but apply styling directly to buttons */}
                    <div className="button-styled">
                        <button className="btn btn-primary" onClick={addOption}>
                            Add Option
                        </button>
                        <button className="btn btn-danger" onClick={removeOption}>
                            Remove Option
                        </button>
                    </div>
                </div>
            );
        
            case "multi-select":
                return (
                    <div>
                        <h3>Multi-Select Dropdown</h3>
                        {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                            (option, index) => (
                                <label key={index} className="me-3">
                                    <input
                                        type="checkbox"
                                        checked={multiSelectedOptions.includes(option)}
                                        onChange={() => handleMultiSelect(option)}
                                    />
                                    {option}
                                </label>
                            )
                        )}
                        <p>Selected Options: {multiSelectedOptions.join(", ")}</p>
                    </div>
                );
            case "controlled":
                return (
                    <div>
                        <h3>Controlled Dropdown</h3>
                        <select
                            className="dropdown"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                        <p>Selected Option: {selectedOption}</p>
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select a dropdown type from the navigation above to view its
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
            <button className="button-gradient" onClick={() => setDropdownType("basic")}>
                Basic Dropdown
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("dynamic")}>
                Dynamic Dropdown
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("dynamicWithInput")}>
                Dynamic Dropdown with Input
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("multi-select")}>
                Multi-Select Dropdown
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("controlled")}>
                Controlled Dropdown
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("searchable")}>
                Searchable Dropdown
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("grouped")}>
                Grouped Dropdown
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("disabledOptions")}>
                Dropdown with Disabled Options
            </button>
        </li>
        
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("tooltipDropdown")}>
                Dropdown with Tooltips
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setDropdownType("animated")}>
                Animated Dropdown
            </button>
        </li>
    </ul>
</nav>
            <div className="dropdown-display">{renderDropdown()}</div>
        </div>
    );
};

export default DropdownPage;
