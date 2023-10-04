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

// Inline style
// const style = {
//     backgroundcolor:'gray'
// }

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={foodlogo} height={100} width={100} />
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
      <div className="search-bar">Search</div>
      <div className="res-container">
        <ResturantCard />
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://images.deliveryhero.io/image/fd-pk/LH/u4tn-listing.jpg?width=400&height=292"
      />
      <h3 className="res-name">Broadway Pizza</h3>
      <h4 className="res-cuisines">Pizza, burgers, biryani</h4>
      <h4 className="res-start">4.6 stars</h4>
      <h4 className="res-wait">10 minutes</h4>
    </div>
  );
};

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
