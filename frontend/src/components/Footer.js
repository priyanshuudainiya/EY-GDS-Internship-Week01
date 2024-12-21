import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">©2024 Your RealCollab. All rights reserved.</p>
        <p className="mb-0">
          Follow us on:
          <a href="https://twitter.com" className="text-white ml-2">
            Twitter
          </a>
          ,
          <a href="https://facebook.com" className="text-white ml-2">
            Facebook
          </a>
          ,
          <a href="https://instagram.com" className="text-white ml-2">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
