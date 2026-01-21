import React, { useState } from "react";
import "../css/LinkPage.css";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "../css/index.css";

const LinkPage = () => {
    const [dynamicLinks, setDynamicLinks] = useState([
        { text: "Home", path: "/" },
        { text: "Accordion Page", path: "/AccordionPage" },
        { text: "Alert Page", path: "/AlertPage" },
    ]);

    const [newLink, setNewLink] = useState("");

    const availablePages = [
        { text: "Alert Page", path: "/AlertPage" },
        { text: "Button Page", path: "/ButtonPage" },
        { text: "Checkbox Page", path: "/CheckboxPage" },
        { text: "Chip Page", path: "/ChipPage" },
        { text: "Date/Time Picker Page", path: "/DatePickerPage" },
        { text: "Dropdown Page", path: "/DropdownPage" },
        { text: "Image Page", path: "/ImagePage" },
        { text: "Link Page", path: "/LinkPage" },
        { text: "List Page", path: "/ListPage" },
        { text: "Radio Button Page", path: "/RadioButtonPage" },
        { text: "Slider Page", path: "/SliderPage" },
        { text: "Span Page", path: "/SpanPage" },
        { text: "Spinner Page", path: "/SpinnerPage" },
        { text: "Tab Page", path: "/TabPage" },
        { text: "Table Page", path: "/TablePage" },
        { text: "Textbox Page", path: "/TextboxPage" },
    ];

    const addLink = () => {
        const selectedPage = availablePages.find((page) => page.path === newLink);
        if (selectedPage) {
            setDynamicLinks([...dynamicLinks, selectedPage]);
            setNewLink("");
        } else {
            alert("Please select a valid page to add.");
        }
    };

    const removeLink = (index) => {
        setDynamicLinks(dynamicLinks.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-5 link-page-container">

            <div className="dynamic-links-container">
                {dynamicLinks.map((link, index) => (
                    <div key={index} className="dynamic-link-card">
                        <Link to={link.path} className="link-text">
                            {link.text}
                        </Link>
                        <AiFillDelete
                            className="delete-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                removeLink(index);
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="link-controls">
                <select
                    className="form-select"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                >
                    <option value="">Select a page to add</option>
                    {availablePages.map((page, index) => (
                        <option key={index} value={page.path}>
                            {page.text}
                        </option>
                    ))}
                </select>
                <button className="btn btn-primary add-link-btn" onClick={addLink}>
                    Add Link
                </button>
            </div>
        </div>
    );
};

export default LinkPage;
