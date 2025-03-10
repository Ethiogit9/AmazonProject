/* eslint-disable no-unused-vars */
import style from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);
  return (
    <div className={style.fixed_Header}>
      {/* upper header */}

      <div>
        <div className={style.header_container}>
          <div className={style.logo_container}>
            {/* Amazon logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon_Logo"
              />
            </Link>
            {/* Delivery  */}
            <div className={style.delivery}>
              <span>
                {/* Location icon */}
                <SlLocationPin size={15} />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Search bar */}
          <div className={style.search}>
            <select name="/public/3.open_cart.png" id="cart">
              <option value="">All</option>
              <option value="">Electronics</option>
              <option value="">Computer</option>
              <option value="">Phones</option>
              <option value="">Clothes</option>
              <option value="">Books</option>
            </select>
            <input type="text" name="" placeholder="Search Amazon" />
            {/*Search icon */}
            <BsSearch size={25} />
          </div>
          <div className={style.order_container}>
            <Link to="" className={style.language}>
              <img src="/public/2.English_Language.png" alt="Language" />
              <select name="" id="">
                <option value="en">EN</option>
                <option value="am">አማ</option>
              </select>
            </Link>
            <Link to="/auth">
              <div className="">
                <p>Hello,sign in </p>
                <span>Account and List</span>
              </div>
            </Link>
            <Link to="/orders" className={style.return}>
              <p>Returns</p>
              <span> & orders</span>
            </Link>
            <Link to="/cart" className={style.cart}>
              <img className={style.cart} src="/public/cart2.png" alt="" />
              <span>{totalItem}</span>
              {/* <div>Cart</div> */}
            </Link>
          </div>
        </div>
      </div>

      {/* lower header */}
      <div>
        <LowerHeader />
      </div>
      {/* <div>lower container</div> */}
    </div>
  );
}

export default Header;
