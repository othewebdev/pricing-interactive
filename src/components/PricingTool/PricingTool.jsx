import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import "./styles.css";
import Toggle from "../Toggle/Toggle";
import IconTick from "../../images/icon-check";

const PricingTool = ({ isMobile }) => {
  const [price, setPrice] = useState(8);
  const [pageviews, setPageviews] = useState("10k");
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setMonthly] = useState(price);

  const optionLabels = ["yes", "no"];

  const handleButton = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    switch (price) {
      case 8 || 6:
        setPageviews("10k");
        break;
      case 12 || 9:
        setPageviews("50k");
        break;
      case 16 || 12:
        setPageviews("100k");
        break;
      case 24 || 18:
        setPageviews("500k");
        break;
      case 36 || 27:
        setPageviews("1m");
        break;
      default:
        break;
    }
  }, [price]);

  return (
    <div className="Container">
      <div className="Top">
        <div className="Header">
          <span className="Pageviews">{pageviews} pageviews</span>
          <div className="PriceContainer">
            <span>${isYearly ? price * 0.75 : price}.00 </span>
            <span>{isYearly ? " / year" : " / month"}</span>
          </div>
        </div>
        <Slider
          currentPrice={price}
          updateMainPrice={setPrice}
          resetYearly={setIsYearly}
        />
        {isMobile && (
          <div className="MobilePriceContainer">
            <span>${isYearly ? price * 0.75 : price}.00 </span>
            <span>{isYearly ? " / year" : " / month"}</span>
          </div>
        )}
        <Toggle
          id="yearly"
          isMobile
          checked={isYearly}
          setIsYearly
          onChange={setIsYearly}
          optionLabels
        />
      </div>

      <hr />
      <div className="Bottom">
        <ul>
          <li>
            <IconTick />
            <span>Unlimited websites</span>
          </li>
          <li>
            <IconTick />
            <span>100% data ownerships</span>
          </li>
          <li>
            <IconTick />
            <span>Email reports</span>
          </li>
        </ul>
        <button className="TrialBtn" onClick={() => handleButton()}>
          Start my trial
        </button>
      </div>
    </div>
  );
};

export default PricingTool;
