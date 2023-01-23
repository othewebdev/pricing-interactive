import React, { useState } from "react";
import InputRange from "react-input-range";
import "./styles.css";
import "react-input-range/lib/css/index.css";

const RangeSlider = ({ currentPrice, updateMainPrice, resetYearly }) => {
  const priceFilter = (value) => {
    switch (value) {
      case 20:
        updatePrice(24);
        break;
      case 28:
        updatePrice(36);
        break;
      case 32:
        updatePrice(36);
        break;
      default:
        updatePrice(value);
        break;
    }
  };

  const updatePrice = (updatedPrice) => {
    updateMainPrice(updatedPrice);
  };

  return (
    <div className="SliderContainer">
      <InputRange
        minValue={8}
        maxValue={36}
        step={4}
        value={currentPrice}
        onChange={(value) => priceFilter(value)}
      />
    </div>
  );
};

export default RangeSlider;
