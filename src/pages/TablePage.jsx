import React, { useState } from "react";
import "../css/TablePage.css"; // Add styling for tables
import "../css/index.css";
import { FaTrash } from "react-icons/fa";

const TablePage = () => {
    const [tableType, setTableType] = useState("default");
    const [data, setData] = useState([
        { id: 1, name: "John Doe", age: 28 },
        { id: 2, name: "Jane Smith", age: 34 },
        { id: 3, name: "Alice Johnson", age: 25 },
    ]);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");

    const addUser = () => {
        if (!newName.trim() || !newAge.trim()) {
            alert("Please provide a valid name and age.");
            return;
        }
        const newUser = {
            id: data.length + 1,
            name: newName,
            age: parseInt(newAge, 10),
        };
        setData([...data, newUser]);
        setNewName("");
        setNewAge("");
    };

    const deleteUser = (id) => {
        const updatedData = data.filter((row) => row.id !== id);
        const reindexedData = updatedData.map((user, index) => ({
            ...user,
            id: index + 1,
        }));
        setData(reindexedData);
    };
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState({ column: "id", order: "asc" });
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2;



    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleSort = (column) => {
        const newOrder =
            sortOrder.column === column && sortOrder.order === "asc" ? "desc" : "asc";
        setSortOrder({ column, order: newOrder });
    };

    const getSortedData = () => {
        const sortedData = [...data];
        sortedData.sort((a, b) => {
            if (sortOrder.order === "asc") {
                return a[sortOrder.column] > b[sortOrder.column] ? 1 : -1;
            } else {
                return a[sortOrder.column] < b[sortOrder.column] ? 1 : -1;
            }
        });
        return sortedData;
    };

    const getFilteredData = () => {
        return getSortedData().filter((row) =>
            row.name.toLowerCase().includes(searchQuery)
        );
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return getFilteredData().slice(startIndex, endIndex);
    };

    const renderTable = () => {
        switch (tableType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Table</h3>
                        <table className="table-basic">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "sortable":
                return (
                    <div>
                        <h3>Sortable Table</h3>
                        <table className="table-sortable">
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort("id")}>ID</th>
                                    <th onClick={() => handleSort("name")}>Name</th>
                                    <th onClick={() => handleSort("age")}>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getSortedData().map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "searchable":
                return (
                    <div>
                        <h3>Searchable Table</h3>
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="search-input"
                            onChange={handleSearch}
                        />
                        <table className="table-searchable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getFilteredData().map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "paginated":
                return (
                    <div>
                        <h3>Paginated Table</h3>
                        <table className="table-paginated">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getPaginatedData().map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination-controls">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={
                                    currentPage * rowsPerPage >= getFilteredData().length
                                }
                            >
                                Next
                            </button>
                        </div>
                    </div>
                );
                case "dynamic":
    return (
        <div>
            <h3>Dynamic Table</h3>
            <table className="table-dynamic">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>
                                <FaTrash
                                    className="bin-icon"
                                    onClick={() => deleteUser(row.id)}
                                    title="Delete User"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add User Form - Now Spaced Out */}
            <div className="add-user-form">
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Age"
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                />
            </div>

            <button className="btn btn-primary add-user-button" onClick={addUser}>
                Add User
            </button>
        </div>
    );



            default:
                return (
                    <p className="text-muted">
                        Select a table type from the navigation above to view its
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
                        <button className="button-gradient" onClick={() => setTableType("basic")}>Basic Table</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTableType("sortable")}>Sortable Table</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTableType("searchable")}>Searchable Table</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTableType("paginated")}>Paginated Table</button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => setTableType("dynamic")}>Dynamic Table</button>
                    </li>
                </ul>
            </nav>
            <div className="table-display">{renderTable()}</div>
        </div>
    );
};

export default TablePage;
