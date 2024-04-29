import { useState } from "react"
import { Link } from "react-router-dom"
import { HEADER_LOGO_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useContext } from "react"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
  const [logButton, setLogButton] = useState("Sign Up")
  const onlineStatus = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="header w-full m-auto p-10 pt-0 pb-0 flex justify-between bg-green-100">
      <div className="logo-container w-[40%]">
        <img className="w-[5rem] m-4 ml-0" src={HEADER_LOGO_URL} />
      </div>
      <div className="nav-items w-[60%]">
        <ul className="flex p-4 m-4 w-[100%] justify-between">
          <li>onlineStatus:{onlineStatus ? "✔" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <li>{loggedInUser}</li>
          <button
            className="login-button"
            onClick={() => {
              logButton === "Sign Up"
                ? setLogButton("Login")
                : setLogButton("Sign Up")
            }}
          >
            {logButton} {console.log(cartItems)}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
