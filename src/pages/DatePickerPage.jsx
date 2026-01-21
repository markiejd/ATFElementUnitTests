import React, { useState } from "react";
import "../css/DatePickerPage.css"; // Add styling for date and time pickers
import "../css/index.css";

const DatePickerPage = () => {
    const [pickerType, setPickerType] = useState("default");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [manualError, setManualError] = useState(""); // Error for manual entry


    const validateDate = (date) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            setManualError("Invalid date format. Use YYYY-MM-DD.");
            return false;
        }
        setManualError(""); // Clear error if valid
        return true;
    };

    const validateTime = (time) => {
        if (!/^\d{2}:\d{2}$/.test(time)) {
            setManualError("Invalid time format. Use HH:MM.");
            return false;
        }
        setManualError(""); // Clear error if valid
        return true;
    };

    const renderPicker = () => {
        switch (pickerType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Date Picker</h3>
                        <input
                            id="basic-date-picker"
                            type="date"
                            className="date-picker"
                            value={startDate}
                            onChange={(e) => {
                                if (validateDate(e.target.value)) {
                                    setStartDate(e.target.value);
                                }
                            }}
                        />
                        <p>Selected Date: {startDate}</p>
                        {manualError && <p className="text-danger">{manualError}</p>}
                    </div>
                );
                case "range":
                    return (
                        <div className="centered-container">
                            <h3>Range Date Picker</h3>
                            <div className="date-range">
                                <label>
                                    Start Date:
                                    <input
                                        id="range-start-date"
                                        type="date"
                                        className="date-picker"
                                        value={startDate}
                                        onChange={(e) => {
                                            if (validateDate(e.target.value)) {
                                                setStartDate(e.target.value);
                                            }
                                        }}
                                    />
                                </label>
                                <label>
                                    End Date:
                                    <input
                                        id="range-end-date"
                                        type="date"
                                        className="date-picker"
                                        value={endDate}
                                        onChange={(e) => {
                                            if (validateDate(e.target.value)) {
                                                setEndDate(e.target.value);
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                            <p>
                                Selected Range: {startDate} - {endDate}
                            </p>
                            {manualError && <p className="text-danger">{manualError}</p>}
                        </div>
                    );
            case "time":
                return (
                    <div>
                        <h3>Time Picker</h3>
                        <label>
                            Select Time:
                            <input
                                id="time-picker"
                                type="time"
                                className="time-picker"
                                value={selectedTime}
                                onChange={(e) => {
                                    if (validateTime(e.target.value)) {
                                        setSelectedTime(e.target.value);
                                    }
                                }}
                            />
                        </label>
                        <p>Selected Time: {selectedTime}</p>
                        {manualError && <p className="text-danger">{manualError}</p>}
                    </div>
                );
           
            default:
                return (
                    <p className="text-muted">
                        Select a picker type from the navigation above to view its functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setPickerType("basic")}>
                            Basic Date Picker
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setPickerType("range")}>
                            Range Date Picker
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setPickerType("time")}>
                            Time Picker
                        </button>
                    </li>
                    
                </ul>
            </nav>
            <div className="picker-display">{renderPicker()}</div>
        </div>
    );
};

export default DatePickerPage;
