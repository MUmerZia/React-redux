import React from 'react';
import {Link} from "react-router-dom";
function Nav() {

    
    const StyleNav = {
        color : "white"
    };
  return (
    <nav className="nav">
        <h1>Navebar</h1>
        <ul className=".nav-links">   
        <Link className={StyleNav} to="/about"><li>About</li></Link >
        <Link  className={StyleNav} to="/shop" ><li>Shop</li></Link >
        <Link  className={StyleNav} to="/itemDetail" ><li>Item</li></Link >
        </ul>
    </nav>
  );
}

export default Nav;
