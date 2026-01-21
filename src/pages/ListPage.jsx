import React, { useState } from "react";
import "../css/ListPage.css"; // Add styling for lists
import { AiFillDelete } from "react-icons/ai"; // Import the delete icon
import "../css/index.css";

const ListPage = () => {
    const [listType, setListType] = useState("default");
    const [listItems, setListItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const [newItem, setNewItem] = useState("");

    const [listA, setListA] = useState(["Item A1", "Item A2", "Item A3"]);
    const [listB, setListB] = useState(["Item B1", "Item B2"]);

    const handleDragStart = (e, item, source) => {
        e.dataTransfer.setData("item", item);
        e.dataTransfer.setData("source", source);
    };

    const handleDrop = (e, destination) => {
        const item = e.dataTransfer.getData("item");
        const source = e.dataTransfer.getData("source");

        if (source === "A" && destination === "B") {
            setListA(listA.filter((i) => i !== item));
            setListB([...listB, item]);
        } else if (source === "B" && destination === "A") {
            setListB(listB.filter((i) => i !== item));
            setListA([...listA, item]);
        }
    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const handleAddItem = () => {
        if (newItem.trim()) {
            setListItems([...listItems, newItem.trim()]);
            setNewItem("");
        }
    };

    const handleRemoveItem = (index) => {
        setListItems(listItems.filter((_, i) => i !== index));
    };

    const handleItemClick = (item) => {
        alert(`You clicked: ${item}`);
    };

    return (
        <div className="container mt-5">


            <nav className="button-nav">
                <ul className="nav-list">
                    {["basic", "numbered", "bulleted", "interactive", "dynamic", "drag-drop"].map(
                        (type) => (
                            <li key={type}>
                                <button className="button-gradient" onClick={() => setListType(type)}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)} List
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </nav>

            {listType === "dynamic" && (
                <div className="list-controls">
                    <input
                        type="text"
                        className="form-control list-input"
                        placeholder="Enter new item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button className="btn btn-primary add-item-button" onClick={handleAddItem}>
                        Add Item
                    </button>
                </div>
            )}

            <div className="list-display">
                {listType === "basic" && (
                    <ul className="list-container">
                        {listItems.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ul>
                )}

                {listType === "numbered" && (
                    <ol className="list-container list-numbered">
                        {listItems.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ol>
                )}

                {listType === "bulleted" && (
                    <ul className="list-container list-bulleted">
                        {listItems.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ul>
                )}

                {listType === "interactive" && (
                    <ul className="list-container list-interactive">
                        {listItems.map((item, index) => (
                            <li key={index} className="list-item interactive-item" onClick={() => handleItemClick(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {listType === "dynamic" && (
                    <ul className="list-container list-dynamic">
                        {listItems.map((item, index) => (
                            <li key={index} className="list-item">
                                {item}
                                <AiFillDelete className="delete-icon" onClick={() => handleRemoveItem(index)} />
                            </li>
                        ))}
                    </ul>
                )}

                {listType === "drag-drop" && (
                    <div className="drag-drop-container">
                        <div className="list-box" onDragOver={allowDrop} onDrop={(e) => handleDrop(e, "A")}>
                            <h3>List A</h3>
                            <ul className="drag-drop-list">
                                {listA.map((item, index) => (
                                    <li key={index} draggable className="drag-drop-item" onDragStart={(e) => handleDragStart(e, item, "A")}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="list-box" onDragOver={allowDrop} onDrop={(e) => handleDrop(e, "B")}>
                            <h3>List B</h3>
                            <ul className="drag-drop-list">
                                {listB.map((item, index) => (
                                    <li key={index} draggable className="drag-drop-item" onDragStart={(e) => handleDragStart(e, item, "B")}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListPage;
