import { colorBadges } from "../assets/scripts/data";
import { capitalizeLetter } from "../assets/scripts/utils";
export default function BadgeBtns() {
  return colorBadges.map((item) => {
    const style = {
      background: item.bg,
      color: item.font,
      borderColor: item.font,
    };
    return (
      <button className="badge-item" key={item.id} style={style}>
        {capitalizeLetter(item.id)}
      </button>
    );
  });
}
