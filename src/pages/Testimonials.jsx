import blockquote from "../assets/images/blockquote.svg";
import workcation from "../assets/images/workcation.svg";
import profil from "../assets/images/profil.png";
import useToggle from "../assets/hooks/useToggle";
import clsx from "clsx";

export default function Testimonials() {
  const [withImage, setWithImage] = useToggle(false);
  const classQuote = clsx(withImage && "blue-bg", !withImage && "txt");
  const classPicture = clsx("no-picture", withImage && "picture");
  return (
    <main className="testimonials">
      <h2>Testimonials</h2>
      <div className={classPicture}>
        {withImage ? (
          <img src={profil} alt="smiling woman" className="profil" />
        ) : (
          <h3>
            <img
              src={workcation}
              alt="office next to palm tree"
              className="workcation"
            />
            Work<span>cation</span>
          </h3>
        )}
      </div>
      <div className={classQuote}>
        {withImage && (
          <img src={blockquote} alt="open blockquote" className="quote" />
        )}
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </blockquote>
        <cite>
          May Andersons <span>Workcation, CTO</span>
        </cite>
      </div>
    </main>
  );
}
