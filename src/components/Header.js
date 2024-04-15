import { useState } from "react"
import { HEADER_LOGO_URL } from "../utils/constants"
const Header = () => {
  const [logButton, setLogButton] = useState("Sign Up")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={HEADER_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              logButton === "Sign Up"
                ? setLogButton("Login")
                : setLogButton("Sign Up")
            }}
          >
            {logButton}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
