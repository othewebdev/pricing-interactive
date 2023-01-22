import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import "./styles.css";
import Toggle from "../Toggle/Toggle";

const PricingTool = () => {
  const [price, setPrice] = useState(8);
  const [pageviews, setPageviews] = useState("10k");
  const [isYearly, setIsYearly] = useState(false);
  const optionLabels = ["yes", "no"];

  useEffect(() => {
    switch (price) {
      case 8:
        setPageviews("10k");
        break;
      case 12:
        setPageviews("50k");
        break;
      case 16:
        setPageviews("100k");
        break;
      case 24:
        setPageviews("500k");
        break;
      case 36:
        setPageviews("1m");
        break;
      default:
        break;
    }
  }, [price]);

  return (
    <div className="Container">
      <div className="Header">
        <span className="Pageviews">{pageviews} pageviews</span>
        <div className="PriceContainer">
          <span>${price}.00 </span>
          <span>{isYearly ? " / year" : " / month"}</span>
        </div>
      </div>
      <Slider
        currentPrice={price}
        updateMainPrice={setPrice}
        resetYearly={setIsYearly}
      />
      <Toggle
        id="yearly"
        checked={isYearly}
        onChange={setIsYearly}
        optionLabels
      />
    </div>
  );
};

export default PricingTool;
