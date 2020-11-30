import React from "react";
import "./footer.css";
import TopFooter from "./topfooter";
import BotFooter from "./botfooter";

const Footer = () => {
  return (
    <div className="footer">
      <TopFooter />
      <BotFooter />
    </div>
  );
};

export default Footer;
