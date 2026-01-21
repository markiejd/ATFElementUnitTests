import React, { useState } from "react";
import "../css/ImagePage.css"; // Add styling for images
import "../css/index.css";



const ImagePage = () => {
    const [imageType, setImageType] = useState("default");
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(300);
    const [flipX, setFlipX] = useState(false);
    const [flipY, setFlipY] = useState(false);
    const [validationWidth, setValidationWidth] = useState(300);
    const [validationHeight, setValidationHeight] = useState(300);
    const [error, setError] = useState("");

    const handleWidthChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setWidth(value);
        }
    };

    const handleHeightChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setHeight(value);
        }
    };

    const handleImageClick = (src) => {
        alert(`Image clicked: ${src}`);
    };
    const [selectedImage, setSelectedImage] = useState("");
                    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleImageChangeResizeBeforeDisplay = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleValidatedImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const img = new Image();
            img.onload = () => {
                if (img.width === validationWidth && img.height === validationHeight) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        setSelectedImage(event.target.result);
                        setError("");
                    };
                    reader.readAsDataURL(file);
                } else {
                    setError(
                        `Error: Image must be exactly ${validationWidth}x${validationHeight}px. Current dimensions are ${img.width}x${img.height}px.`
                    );
                }
            };
            img.src = URL.createObjectURL(file);
        }
    };


    const renderImage = () => {
        switch (imageType) {
            case "basic":
                return (
                    <div>
                        <h3>Basic Image Display</h3>
                        <img
                            src="/logo192.png"
                            alt="Basic"
                            className="image-basic"
                        />
                    </div>
                );
            case "hover-effect":
                return (
                    <div>
                        <h3>Image with Hover Effect</h3>
                        <img
                            src="/logo192.png"
                            alt="Hover Effect"
                            className="image-hover"
                        />
                    </div>
                );
                case "resizable":             
                return (
                    <div>
                        <h3>Resizable Image</h3>
                        <img
                            src="/logo192.png"
                            alt="Resizable"
                            style={{ width: `${width}px`, height: `${height}px` }}
                            className="image-resizable"
                        />
                        <div className="mt-3">
                            {/* Slider for Width */}
                            <label>
                                Width:
                                <input
                                    type="range"
                                    min="50"
                                    max="600"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                />
                                <input
                                    type="number"
                                    min="50"
                                    max="600"
                                    value={width}
                                    onChange={handleWidthChange}
                                    className="form-control mt-2 d-inline-block"
                                    style={{ width: "80px", marginLeft: "10px" }}
                                />
                                px
                            </label>
                            <br />
                            {/* Slider for Height */}
                            <label className="mt-3">
                                Height:
                                <input
                                    type="range"
                                    min="50"
                                    max="600"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                                <input
                                    type="number"
                                    min="50"
                                    max="600"
                                    value={height}
                                    onChange={handleHeightChange}
                                    className="form-control mt-2 d-inline-block"
                                    style={{ width: "80px", marginLeft: "10px" }}
                                />
                                px
                            </label>
                        </div>
                    </div>
                );
            case "select-new":
                return (
                    <div>
                        <h3>Select a New Image</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="form-control mb-3"
                        />
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="image-selected"
                            />
                        )}
                    </div>
                );
                case "resize-before-display":
    return (
        <div className="resize-container">
            <h3>Resize Image Before Display</h3>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChangeResizeBeforeDisplay}
                className="file-input"
            />

            <div className="resize-controls">
                <label className="control-group">
                    Width:
                    <input
                        type="range"
                        min="50"
                        max="600"
                        value={width}
                        onChange={(e) => setWidth(parseInt(e.target.value, 10))}
                        className="form-range"
                    />
                    <input
                        type="number"
                        min="50"
                        max="600"
                        value={width}
                        onChange={(e) => setWidth(parseInt(e.target.value, 10))}
                        className="form-control"
                    />
                    px
                </label>

                <label className="control-group">
                    Height:
                    <input
                        type="range"
                        min="50"
                        max="600"
                        value={height}
                        onChange={(e) => setHeight(parseInt(e.target.value, 10))}
                        className="form-range"
                    />
                    <input
                        type="number"
                        min="50"
                        max="600"
                        value={height}
                        onChange={(e) => setHeight(parseInt(e.target.value, 10))}
                        className="form-control"
                    />
                    px
                </label>
            </div>
        </div>
    );


    
    case "validated-upload":
        return (
            <div className="validation-container">
                <h3>Upload with Dimension Validation</h3>
    
                <div className="validation-controls">
                    <label className="control-group">
                        Required Width:
                        <input
                            type="number"
                            value={validationWidth}
                            onChange={(e) => setValidationWidth(parseInt(e.target.value, 10))}
                            className="form-control"
                        />
                        px
                    </label>
    
                    <label className="control-group">
                        Required Height:
                        <input
                            type="number"
                            value={validationHeight}
                            onChange={(e) => setValidationHeight(parseInt(e.target.value, 10))}
                            className="form-control"
                        />
                        px
                    </label>
                </div>
    
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleValidatedImageUpload}
                    className="file-input"
                />
    
                {error && <p className="text-danger">{error}</p>}
            </div>
        );
    








            case "tooltip":
                return (
                    <div>
                        <h3>Image with Tooltip</h3>
                        <img
                            src="/logo192.png"
                            alt="Tooltip"
                            className="image-tooltip"
                            title="This is the CGI company Logo"
                        />
                    </div>
                );

                case "flip":
                    return (
                        <div className="flip-container">
                            <h3>Flip Image</h3>
                            <img
                                src="/logo192.png"
                                alt="Flippable"
                                style={{
                                    transform: `scale(${flipX ? "-1" : "1"}, ${flipY ? "-1" : "1"})`,
                                }}
                                className="image-flip"
                            />
                            <div className="flip-buttons">
                                <button className="btn btn-primary" onClick={() => setFlipX(!flipX)}>
                                    Flip Horizontally
                                </button>
                                <button className="btn btn-primary" onClick={() => setFlipY(!flipY)}>
                                    Flip Vertically
                                </button>
                            </div>
                        </div>
                    );
                
                                                                                    

            case "clickable":
                return (
                    <div>
                        <h3>Clickable Image</h3>
                        <img
                            src="/logo192.png"
                            alt="Clickable"
                            className="image-clickable"
                            onClick={() =>
                                handleImageClick(
                                    "This is a CGI company Logo"
                                )
                            }
                        />
                    </div>
                );
            default:
                return (
                    <p className="text-muted">
                        Select an image type from the navigation above to view
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
            <button className="button-gradient" onClick={() => setImageType("basic")}>
                Basic Image
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("hover-effect")}>
                Hover Effect
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("clickable")}>
                Clickable Image
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("resizable")}>
                Resizable Image
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("select-new")}>
                Select a New Image
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("resize-before-display")}>
            resize-before-display
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("validated-upload")}>
            validated-upload
            </button>
        </li>
        <li>
            <button className="button-gradient" onClick={() => setImageType("tooltip")}>
                Image with Tooltip
            </button>
        </li>

        <li>
            <button className="button-gradient" onClick={() => setImageType("flip")}>
                Flip Image
            </button>
        </li>
    </ul>
</nav>

            <div className="image-display">{renderImage()}</div>
        </div>
    );
};

export default ImagePage;
