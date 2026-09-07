import { colorBannersToasts } from "../assets/scripts/data";
import capitalizeLetter from "../assets/scripts/utils";

export default function BannersComp() {
  return colorBannersToasts.map((item) => {
    const styleBg = { background: item.bg };
    const styleTitle = { color: item.titleCol };
    const styleDescr = { color: item.descCol };
    return (
      <div className="banner-item" key={item.id} style={styleBg}>
        <h4 style={styleTitle}>{capitalizeLetter(item.id)}</h4>
        <div className="texts">
          <p className="title" style={styleTitle}>
            <img src={item.icon} alt={item.alt} />{" "}
            {capitalizeLetter(item.title)}
          </p>
          <p className="description" style={styleDescr}>
            {item.descr}
          </p>
        </div>
      </div>
    );
  });
}
