import React from "react";
import "./styles.css";

const PricingTool = () => {
  return (
    <div className="Container">
      <div className="Header">
        <span className="Pageviews">100k pageviews</span>
        <div className="PriceContainer">
          <span>$16.00 </span>
          <span>/ month</span>
        </div>
      </div>
    </div>
  );
};

export default PricingTool;
