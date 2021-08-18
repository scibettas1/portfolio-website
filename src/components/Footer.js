import React from "react";

import "../styles/style.css"

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div>
<footer>
  <div className="container">
    Copyright © Samantha Scibetta 2009 - {currentYear} All Rights Reserved<br/>
    This website was built in 2021 using React, HTML, JavaScript, Bootstrap, Custom CSS Styling, and Adobe Illustrator. 
    <a href="https://github.com/scibettas1/scibettas1.github.io/tree/master" target="_blank" rel="noopener noreferrer"><br/>
    <button type="button" className="view-btn">View Repository</button></a>
  </div>

</footer>
  </div>
  );
}

export default Footer;