import React, { useState } from "react";
import "../css/SpanPage.css"; // Add styling for spans
import "../css/index.css";

const SpanPage = () => {
    const [spanType, setSpanType] = useState("default");
    const [dynamicSpans, setDynamicSpans] = useState(["Span 1", "Span 2"]);

    const addSpan = () => {
        const newSpan = `Span ${dynamicSpans.length + 1}`;
        setDynamicSpans([...dynamicSpans, newSpan]);
    };

    const removeSpan = () => {
        if (dynamicSpans.length > 0) {
            setDynamicSpans(dynamicSpans.slice(0, -1));
        }
    };

    const handleSpanClick = (text) => {
        alert(`You clicked: ${text}`);
    };

    const renderSpan = () => {
        switch (spanType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Span</h3>
                        <span className="span-basic">This is a basic span element.</span>
                    </div>
                );
            case "hover":
                return (
                    <div>
                        <h3>Hover Span</h3>
                        <span className="span-hover">Hover over this span to see the effect.</span>
                    </div>
                );
            case "interactive":
                return (
                    <div>
                        <h3>Interactive Span</h3>
                        {["Click Me 1", "Click Me 2", "Click Me 3"].map((text, index) => (
                            <span
                                key={index}
                                className="span-interactive"
                                onClick={() => handleSpanClick(text)}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                );
            case "dynamic":
                return (
                    <div>
                        <h3>Dynamic Spans</h3>
                        {dynamicSpans.map((text, index) => (
                            <span key={index} className="span-dynamic">
                                {text}
                            </span>
                        ))}
                        <div className="dynamic-span-buttons">
    <button className="btn btn-primary" onClick={addSpan}>
        Add Span
    </button>
    <button className="btn btn-danger" onClick={removeSpan}>
        Remove Span
    </button>
</div>

                    </div>
                );
            case "styled":
                return (
                    <div>
                        <h3>Styled Span</h3>
                        <span className="span-styled">This is a styled span element.</span>
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select a span type from the navigation above to view its
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
                        <button className="button-gradient" onClick={() => setSpanType("basic")}>Basic Span</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpanType("hover")}>Hover Span</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpanType("interactive")}>Interactive Span</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpanType("dynamic")}>Dynamic Spans</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setSpanType("styled")}>Styled Span</button>
                    </li>
                </ul>
            </nav>
            <div className="span-display">{renderSpan()}</div>
        </div>
    );
};

export default SpanPage;
