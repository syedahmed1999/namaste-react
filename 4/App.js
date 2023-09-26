import React from "react";
import ReactDOM from "react-dom/client";
import foodlogo from "./assests/foodlogo.png";
import "./index.css";
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={foodlogo}
                    height={100}
                    width={100} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                <ResturantCard />
            </div>
        </div>
    );
};

const ResturantCard = () => {
    return (
        <div className="res-card">
            <h3 className="res-name">Broadway Pizza</h3>
            <img />
        </div>
    );
};

// stopped at 36

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppLayout />);
