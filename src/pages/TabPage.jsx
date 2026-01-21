import React, { useState } from "react";
import "../css/TabPage.css"; // Add styling for tabs
import { FaTrash } from "react-icons/fa"; // Bin icon for deleting tabs

const TabPage = () => {
    const [tabType, setTabType] = useState("default");
    const [activeTab, setActiveTab] = useState(0);
    const [dynamicTabs, setDynamicTabs] = useState([
        { id: 1, name: "Tab 1", content: "Content for Tab 1" },
        { id: 2, name: "Tab 2", content: "Content for Tab 2" },
    ]);

    const addTab = () => {
        const newId = dynamicTabs.length + 1;
        setDynamicTabs([
            ...dynamicTabs,
            { id: newId, name: `Tab ${newId}`, content: `Content for Tab ${newId}` },
        ]);
    };

    const removeTab = (id) => {
        const updatedTabs = dynamicTabs.filter((tab) => tab.id !== id);
        setDynamicTabs(updatedTabs);

        // Update active tab if needed
        if (activeTab >= updatedTabs.length) {
            setActiveTab(updatedTabs.length - 1);
        }
    };

    const renderTabs = () => {
        switch (tabType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Tabs</h3>
                        <div className="tabs">
                            <button
                                className={`tab ${activeTab === 0 ? "active" : ""}`}
                                onClick={() => setActiveTab(0)}
                            >
                                Tab 1
                            </button>
                            <button
                                className={`tab ${activeTab === 1 ? "active" : ""}`}
                                onClick={() => setActiveTab(1)}
                            >
                                Tab 2
                            </button>
                        </div>
                        <div className="tab-content">
                            {activeTab === 0 && <p>Content for Tab 1</p>}
                            {activeTab === 1 && <p>Content for Tab 2</p>}
                        </div>
                    </div>
                );
            case "dynamic":
                return (
                    <div>
                        <h3>Dynamic Tabs</h3>
                        <div className="tabs">
                            {dynamicTabs.map((tab, index) => (
                                <div key={tab.id} className="tab-wrapper">
                                    <button
                                        className={`tab ${activeTab === index ? "active" : ""}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.name}
                                    </button>
                                    <FaTrash
                                        className="bin-icon"
                                        onClick={() => removeTab(tab.id)}
                                        title="Delete Tab"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="tab-content">
                            {dynamicTabs[activeTab] && <p>{dynamicTabs[activeTab].content}</p>}
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-primary" onClick={addTab}>
                                Add Tab
                            </button>
                        </div>
                    </div>
                );
                case "vertical":
                    return (
                        <div className="vertical-tabs-container">
                            <h3>Vertical Tabs</h3>
                            <div className="tabs-vertical">
                                <div className="tab-buttons-vertical">
                                    <button
                                        className={`tab-vertical ${activeTab === 0 ? "active" : ""}`}
                                        onClick={() => setActiveTab(0)}
                                    >
                                        Vertical Tab 1
                                    </button>
                                    <button
                                        className={`tab-vertical ${activeTab === 1 ? "active" : ""}`}
                                        onClick={() => setActiveTab(1)}
                                    >
                                        Vertical Tab 2
                                    </button>
                                </div>
                                <div className="tab-content-vertical">
                                    {activeTab === 0 && <p>Content for Vertical Tab 1</p>}
                                    {activeTab === 1 && <p>Content for Vertical Tab 2</p>}
                                </div>
                            </div>
                        </div>
                    );
            default:
                return (
                    <p className="text-muted">
                        Select a tab type from the navigation above to view its functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => setTabType("basic")}>
                            Basic Tabs
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTabType("dynamic")}>
                            Dynamic Tabs
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTabType("vertical")}>
                            Vertical Tabs
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="tab-display">{renderTabs()}</div>
        </div>
    );
};

export default TabPage;
