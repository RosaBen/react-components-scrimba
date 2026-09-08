import { pages } from "../assets/scripts/data";

export default function Links() {
  const listLinks = pages.map((item) => (
    <a href={`/${item}`} target="_blank" rel="noopener noreferrer" key={item}>
      {item}
    </a>
  ));
  return (
    <>
      <a href="/" target="_blank" rel="noopener noreferrer">
        home
      </a>
      {listLinks}
    </>
  );
}
