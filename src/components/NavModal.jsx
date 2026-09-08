import Links from "./Links";
import { ToggleContext } from "../App";
import { useContext } from "react";

export default function NavModal() {
  const { toggle } = useContext(ToggleContext);
  return (
    <div className="modal">
      <div className="modal-links">
        <Links />
      </div>
      <button onClick={toggle}>X</button>
    </div>
  );
}
