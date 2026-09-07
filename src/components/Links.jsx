import { pages } from "../assets/scripts/data";
import { Link } from "react-router-dom";

export default function Links() {
  return pages.map((item) => (
    <a href={`/${item}`} target="_blank" rel="noopener noreferrer" key={item}>
      {item}
    </a>
  ));
}
