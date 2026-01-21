import React, { useState } from "react";
import "../css/SliderPage.css"; // Add styling for sliders
import "../css/index.css";

const SliderPage = () => {
    const [sliderType, setSliderType] = useState("default");
    const [sliderValue, setSliderValue] = useState(50);
    const [rangeValues, setRangeValues] = useState({ min: 20, max: 80 });
    const [dynamicSliders, setDynamicSliders] = useState([{ value: 50, max: 100 }]);
    const [temporaryMax, setTemporaryMax] = useState(rangeValues.max); // Temporary max input value


    const addSlider = () => {
        setDynamicSliders([...dynamicSliders, { value: 50, max: 100 }]);
    };

    const addLimitedSlider = () => {
        setDynamicSliders([...dynamicSliders, { value: 50, max: 90 }]);
    };

    const removeSlider = () => {
        if (dynamicSliders.length > 0) {
            setDynamicSliders(dynamicSliders.slice(0, -1));
        }
    };

    const handleRangeChange = (type, value) => {
        const newValue = Math.max(0, Math.min(100, Number(value))); // Clamp value between 0 and 100
        setRangeValues((prev) => ({
            ...prev,
            [type]: type === "min" ? Math.min(newValue, prev.max - 1) : Math.max(newValue, prev.min + 1),
        }));
    };

    const handleMaxInputChange = (value) => {
        setTemporaryMax(value); // Temporarily store the max value during typing
    };

    const handleMaxInputBlur = () => {
        const newValue = Math.max(rangeValues.min + 1, Math.min(100, Number(temporaryMax))); // Clamp value
        setRangeValues((prev) => ({
            ...prev,
            max: newValue,
        }));
        setTemporaryMax(newValue); // Update the temporary state
    };

    const renderSlider = () => {
        switch (sliderType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Slider with Textbox</h3>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            className="slider-basic"
                            onChange={(e) => setSliderValue(e.target.value)}
                        />
                        <p>Value: {sliderValue}</p>
                        <input
                            type="number"
                            value={sliderValue}
                            min="0"
                            max="100"
                            onChange={(e) => setSliderValue(Math.min(100, Math.max(0, e.target.value)))}
                        />
                        <button onClick={() => setSliderValue(50)}>Reset</button>
                    </div>
                );
            case "range":
                return (
                    <div>
                        <h3>Range Slider</h3>
                        <label>
                            Min:
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={rangeValues.min}
                                className="slider-range"
                                onChange={(e) => handleRangeChange("min", e.target.value)}
                            />
                        </label>
                        <input
                            type="number"
                            value={rangeValues.min}
                            min="0"
                            max={rangeValues.max - 1}
                            onChange={(e) => handleRangeChange("min", e.target.value)}
                        />
                        <label>
                            Max:
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={rangeValues.max}
                                className="slider-range"
                                onChange={(e) => handleRangeChange("max", e.target.value)}
                            />
                        </label>
                        <input
                            type="number"
                            value={temporaryMax}
                            min={rangeValues.min + 1}
                            max="100"
                            onChange={(e) => handleMaxInputChange(e.target.value)}
                            onBlur={handleMaxInputBlur}
                        />
                        <p>
                            Range: {rangeValues.min} - {rangeValues.max}
                        </p>
                    </div>
                );
            case "dynamic":
                return (
                    <div>
                        <h3>Dynamic Sliders</h3>
                        {dynamicSliders.map((slider, index) => (
                            <div key={index} className="mb-3">
                                <input
                                    type="range"
                                    min="0"
                                    max={slider.max}
                                    value={slider.value}
                                    className="slider-dynamic"
                                    onChange={(e) => {
                                        const updatedSliders = [...dynamicSliders];
                                        updatedSliders[index].value = e.target.value;
                                        setDynamicSliders(updatedSliders);
                                    }}
                                />
                                <input
                                    type="number"
                                    min="0"
                                    max={slider.max}
                                    value={slider.value}
                                    onChange={(e) => {
                                        const updatedValue = Math.min(
                                            slider.max,
                                            Math.max(0, e.target.value)
                                        );
                                        const updatedSliders = [...dynamicSliders];
                                        updatedSliders[index].value = updatedValue;
                                        setDynamicSliders(updatedSliders);
                                    }}
                                />
                                <p>
                                    Slider {index + 1} Value: {slider.value} (Max: {slider.max})
                                </p>
                            </div>
                        ))}
                        <div className="slider-buttons">
    <button className="btn btn-primary" onClick={addSlider}>
        Add Slider (Max 100)
    </button>
    <button className="btn btn-secondary" onClick={addLimitedSlider}>
        Add Slider (Max 90)
    </button>
    <button className="btn btn-danger" onClick={removeSlider}>
        Remove Slider
    </button>
</div>

                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select a slider type from the navigation above to view its functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setSliderType("basic")}>
                            Basic Slider
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSliderType("range")}>
                            Range Slider
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSliderType("dynamic")}>
                            Dynamic Sliders
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="slider-display">{renderSlider()}</div>
        </div>
    );
};

export default SliderPage;
