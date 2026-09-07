import { TiThMenu } from "react-icons/ti";
import useToggle from "../assets/hooks/useToggle";
import { createContext } from "react";
import Links from "./Links";
import NavModal from "./NavModal";
import avatar from "../assets/images/avatarRB.jpg";

const ToggleContext = createContext();

export default function Header() {
  const [on, toggle] = useToggle(false);
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
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
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
