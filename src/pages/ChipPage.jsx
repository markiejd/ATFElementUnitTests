import React, { useState } from "react";
import "../css/ChipPage.css"; // Add styling for chips
import "../css/index.css";

const ChipPage = () => {
    const [chipType, setChipType] = useState("default");
    const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
    const [dynamicChips, setDynamicChips] = useState(["Dynamic 1", "Dynamic 2"]);

    const handleRemoveChip = (index) => {
        const updatedChips = chips.filter((_, i) => i !== index);
        setChips(updatedChips);
    };

    const addDynamicChip = () => {
        const newChip = `Dynamic ${dynamicChips.length + 1}`;
        setDynamicChips([...dynamicChips, newChip]);
    };

    const removeDynamicChip = () => {
        if (dynamicChips.length > 0) {
            setDynamicChips(dynamicChips.slice(0, -1));
        }
    };

    const handleChipClick = (chip) => {
        alert(`${chip} clicked!`);
    };




    const renderChip = () => {
        switch (chipType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Chips</h3>
                        <div className="chip-container">
                            <span className="chip chip-primary">Primary Chip</span>
                            <span className="chip chip-secondary">Secondary Chip</span>
                            <span className="chip chip-success">Success Chip</span>
                            <span className="chip chip-danger">Danger Chip</span>
                        </div>
                    </div>
                );
            case "removable":
                return (
                    <div>
                        <h3>Removable Chips</h3>
                        <div className="chip-container">
                            {chips.map((chip, index) => (
                                <span key={index} className="chip chip-default">
                                    {chip}
                                    <button
                                        className="chip-remove"
                                        onClick={() => handleRemoveChip(index)}
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                );
                case "dynamic":
                    return (
                        <div>
                            <h3>Dynamic Chips</h3>
                            <div className="chip-container">
                                {dynamicChips.map((chip, index) => (
                                    <span key={index} className="chip chip-default">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                            {/* Directly applying button styles without container */}
                            <div className="button-styled">
                                <button className="btn btn-primary" onClick={addDynamicChip}>
                                    Add Chip
                                </button>
                                <button className="btn btn-danger" onClick={removeDynamicChip}>
                                    Remove Chip
                                </button>
                            </div>
                        </div>
                    );
                
            case "clickable":
                return (
                    <div>
                        <h3>Clickable Chips</h3>
                        <div className="chip-container">
                            {chips.map((chip, index) => (
                                <span
                                    key={index}
                                    className="chip chip-clickable"
                                    onClick={() => handleChipClick(chip)}
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select a chip type from the navigation above to view its
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
                        <button className="button-gradient" onClick={() => setChipType("basic")}>
                            Basic Chips
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setChipType("removable")}>
                            Removable Chips
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setChipType("dynamic")}>
                            Dynamic Chips
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setChipType("clickable")}>
                            Clickable Chips
                        </button>
                    </li>

                </ul>
            </nav>
            <div className="chip-display">{renderChip()}</div>
        </div>
    );
};

export default ChipPage;
