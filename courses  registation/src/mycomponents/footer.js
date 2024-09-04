import React from 'react';
import './Footer.css'; // Import your custom CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {/* Content for the first column */}
          </div>
          <div className="col-sm-4">
            <h6>In case of any issues</h6>
            <p>Email: hemant@iitgoa.ac.in</p>
          </div>
          <div className="col-sm-4">
            <h6>Follow Us</h6>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://iitgoa.ac.in" target="_blank" rel="noopener noreferrer"> IIT Goa Website</a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/iitgoaofficial/" target="_blank" rel="noopener noreferrer"> Instagram Page</a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
