import React, { useState } from "react";
import "../css/AccordionPage.css"; // Add styling for the accordions
import "../css/index.css"; // Add styling for the accordions

const AccordionPage = () => {
    const [accordionType, setAccordionType] = useState("default");
    const [openIndex, setOpenIndex] = useState(null);
    const [toggleAll, setToggleAll] = useState(false);


    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleToggleAll = () => {
        setToggleAll(!toggleAll);
    };

    const renderAccordion = () => {
        switch (accordionType) {
            case "basic":
                return (
                    <div className="accordion">
                        <div className="accordion-item">
                            <button
                                className="accordion-header"
                                onClick={() => toggleAccordion(0)}
                            >
                                Basic Section 1
                            </button>
                            <div
                                className={`accordion-body ${
                                    openIndex === 0 ? "accordion-body-show" : ""
                                }`}
                            >
                                This is the content of Basic Section 1.
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button
                                className="accordion-header"
                                onClick={() => toggleAccordion(1)}
                            >
                                Basic Section 2
                            </button>
                            <div
                                className={`accordion-body ${
                                    openIndex === 1 ? "accordion-body-show" : ""
                                }`}
                            >
                                This is the content of Basic Section 2.
                            </div>
                        </div>
                    </div>
                );
            case "defaultOpen":
                return (
                    <div className="accordion">
                        <div className="accordion-item">
                            <button className="accordion-header">
                                Section 1 (Always Open)
                            </button>
                            <div className="accordion-body accordion-body-show">
                                This section is open by default.
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button
                                className="accordion-header"
                                onClick={() => toggleAccordion(2)}
                            >
                                Section 2
                            </button>
                            <div
                                className={`accordion-body ${
                                    openIndex === 2 ? "accordion-body-show" : ""
                                }`}
                            >
                                This is Section 2 content.
                            </div>
                        </div>
                    </div>
                );

                case "icons":
                    return (
                        <div className="accordion">
                            {["Section 1", "Section 2", "Section 3"].map((section, index) => (
                                <div key={index} className="accordion-item">
                                    <button
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {section} {openIndex === index ? "-" : "+"}
                                    </button>
                                    <div
                                        className={`accordion-body ${
                                            openIndex === index ? "accordion-body-show" : ""
                                        }`}
                                    >
                                        This is the content of {section}.
                                    </div>
                                </div>
                            ))}
                        </div>
                    );

            case "toggleAll":
                return (
                    <div>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={handleToggleAll}
                        >
                            {toggleAll ? "Collapse All" : "Expand All"}
                        </button>
                        <div className="accordion">
                            <div className="accordion-item">
                                <button className="accordion-header">
                                    Section 1
                                </button>
                                <div
                                    className={`accordion-body ${
                                        toggleAll ? "accordion-body-show" : ""
                                    }`}
                                >
                                    Content for Section 1.
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header">
                                    Section 2
                                </button>
                                <div
                                    className={`accordion-body ${
                                        toggleAll ? "accordion-body-show" : ""
                                    }`}
                                >
                                    Content for Section 2.
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header">
                                    Section 3
                                </button>
                                <div
                                    className={`accordion-body ${
                                        toggleAll ? "accordion-body-show" : ""
                                    }`}
                                >
                                    Content for Section 3.
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select an accordion type from the navigation above to view its functionality!
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setAccordionType("basic")}>
                            Basic Accordion
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient"
                            onClick={() => setAccordionType("defaultOpen")}
                        >
                            Accordion with Default Open
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setAccordionType("toggleAll")}>
                            Accordion with Toggle All
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setAccordionType("icons")}>
                            Accordions with Icons
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="accordion-display">{renderAccordion()}</div>
        </div>
    );
};

export default AccordionPage;
