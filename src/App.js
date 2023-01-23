import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PricingTool from "./components/PricingTool/PricingTool";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="Page">
      <Header />
      <PricingTool isMobile />
    </div>
  );
}

export default App;
