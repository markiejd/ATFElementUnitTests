import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/AlertPage.css"; // Add styling for the alerts
import "../css/index.css";

const AlertPage = () => {
    const [alertType, setAlertType] = useState("default");
    const [showAlert, setShowAlert] = useState(false); // For showing the modal

    const handleShow = (type) => {
        setAlertType(type);
        setShowAlert(true);
    };

    const handleClose = () => {
        setShowAlert(false);
    };

    const renderAlertContent = () => {
        switch (alertType) {
            case "success":
                return (
                    <div className="alert alert-success">
                        <strong>Success!</strong> This is a success alert.
                    </div>
                );
            case "warning":
                return (
                    <div className="alert alert-warning">
                        <strong>Warning!</strong> This is a warning alert.
                    </div>
                );
            case "danger":
                return (
                    <div className="alert alert-danger">
                        <strong>Danger!</strong> This is a danger alert.
                    </div>
                );
            case "info":
                return (
                    <div className="alert alert-info">
                        <strong>Info!</strong> This is an info alert.
                    </div>
                );
            case "dismissible":
                return (
                    <div className="alert alert-dismissible alert-warning">
                        <strong>Dismissible!</strong> You can close this alert.
                    </div>
                );
            case "actionable":
                return (
                    <div className="alert alert-primary">
                        <strong>Actionable!</strong> This alert includes actions.
                        <div className="mt-2">
                            <Button
                                className="btn btn-sm btn-primary me-2"
                                onClick={() => alert("Action Confirmed!")}
                            >
                                Confirm
                            </Button>
                            <Button
                                className="btn btn-sm btn-secondary"
                                onClick={() => alert("Action Canceled!")}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select an alert type from the navigation above to view
                        its functionality.
                    </p>
                );
        }
    };

    return (
        <div className="container mt-5">
            <nav className="button-nav">
                <ul className="nav-list">
                    <li>
                        <button className="button-gradient" onClick={() => handleShow("success")}>
                            Success Alert
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => handleShow("warning")}>
                            Warning Alert
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => handleShow("danger")}>
                            Danger Alert
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => handleShow("info")}>
                            Info Alert
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => handleShow("dismissible")}>
                            Dismissible Alert
                        </button>
                    </li>
                    <li>
                        <button className="button-gradient" onClick={() => handleShow("actionable")}>
                            Actionable Alert
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Popup Modal */}
            <Modal show={showAlert} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderAlertContent()}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AlertPage;
