import React from "react";
import "../css/HomePage.css"; // Add styling for Home Page

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to the CGI UI Test Application</h1>
                <p>
                    This application provides a comprehensive testing environment for various UI
                    components. Explore different functionalities such as dynamic tables, tabs,
                    spinners, and more!
                </p>
            </header>
            <main className="homepage-main">
                <section className="homepage-section">
                    <h2>Features</h2>
                    <ul>
                        <li>Dynamic UI components</li>
                        <li>Interactive and customizable tabs</li>
                        <li>Tables with sorting, searching, and pagination</li>
                        <li>Dynamic spinner and slider testing</li>
                    </ul>
                </section>
                <section className="homepage-section">
                    <h2>How to Use</h2>
                    <p>
                        Use the navigation bar at the top of the application to explore and test
                        different UI components. Each page provides a detailed demonstration of its
                        unique functionality.
                    </p>
                </section>
            </main>

        </div>
    );
};

export default HomePage;
