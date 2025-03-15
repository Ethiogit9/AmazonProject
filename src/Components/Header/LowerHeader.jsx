// import React from 'react'
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today&lsquo;s Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gist Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
