import { TiThMenu } from "react-icons/ti";
import Links from "./Links";
import NavModal from "./NavModal";
import avatar from "../assets/images/avatarRB.jpg";
import { ToggleContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const { on, toggle } = useContext(ToggleContext);

  return (
    <header>
      <nav>
        <div className="brand">
          <img src={avatar} alt="avatar rosa" />
          <h1>My React Components</h1>
        </div>
        <div className="desktop-nav">
          <Links />
        </div>
        {on ? <NavModal /> : <TiThMenu className="icon" onClick={toggle} />}
      </nav>
      <div className="header-border"></div>
    </header>
  );
}
