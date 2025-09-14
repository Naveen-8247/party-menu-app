import React from 'react';
import './index.css';

function Footer({ count }) {
  return (
    <div className="footer">
      <div className="footer-left">Total Dish Selected <b>{count}</b></div>
      <button className="continue-btn">Continue</button>
    </div>
  );
}

export default Footer;
