import { pages } from "../assets/scripts/data";
import { Link } from "react-router-dom";

export default function Links() {
  const listLinks = pages.map((item) => (
    <Link to={`/${item}`} target="_blank" rel="noopener noreferrer" key={item}>
      {item}
    </Link>
  ));
  return (
    <>
      <Link to="/" target="_blank" rel="noopener noreferrer">
        home
      </Link>
      {listLinks}
    </>
  );
}
