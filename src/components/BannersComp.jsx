import { useLocation } from "react-router-dom";
import { colorBannersToasts } from "../assets/scripts/data";
import { capitalizeLetter } from "../assets/scripts/utils";
import clsx from "clsx";

export default function BannersComp() {
  const { pathname } = useLocation();
  return colorBannersToasts.map((item) => {
    const styleBg = { background: item.bg };
    const styleTitle = { color: item.titleCol };
    const styleDescr = { color: item.descCol };
    const classSection = clsx(
      pathname === "/banners" ? "banner-item" : "toast-item",
    );

    return (
      <section className={classSection} key={item.id} style={styleBg}>
        {pathname === "/banners" ? (
          <h4 style={styleTitle}>{capitalizeLetter(item.id)}</h4>
        ) : (
          <h3 style={styleTitle}>
            <img src={item.icon} alt={item.alt} />
            {capitalizeLetter(item.id)}
          </h3>
        )}
        <div className="texts">
          {pathname === "/banners" ? (
            <p className="title" style={styleTitle}>
              <img src={item.icon} alt={item.alt} />{" "}
              {capitalizeLetter(item.title)}
            </p>
          ) : (
            ""
          )}
          {pathname === "/banners" ? (
            <p className="description" style={styleDescr}>
              {item.descrBanner}
            </p>
          ) : (
            <p className="description" style={styleDescr}>
              {item.descrToast}
            </p>
          )}
        </div>
      </section>
    );
  });
}
