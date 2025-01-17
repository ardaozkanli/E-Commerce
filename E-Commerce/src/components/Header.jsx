import { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Header() {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme((theme) => !theme);
    if (!theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  };

  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="flex-row" style={{ cursor: "pointer" }} onClick={() => navigate("/")} >
        <img
          className="logo"
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          src="./src/images/logo.png"></img>
        <p className="logo-text">Hedwigs</p>
      </div>
      <div className="flex-row">
        <input type="text" className="header-input" placeholder="Search" />
        <div className="header-icons">
          {!theme ? (
            <CiLight onClick={changeTheme} />
          ) : (
            <FaRegMoon onClick={changeTheme} />
          )}
          <CiShoppingBasket />
        </div>
      </div>
    </div>
  );
}

export default Header;
