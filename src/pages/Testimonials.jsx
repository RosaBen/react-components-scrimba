import blockquote from "../assets/images/blockquote.svg";
import workcation from "../assets/images/workcation.svg";
import profil from "../assets/images/profil.png";

export default function Testimonials() {
  return (
    <main className="testimonials">
      <h2>Testimonials</h2>
      <div className="picture">
        <img src={profil} alt="smiling woman" className="profil" />
      </div>
      <div className="texts blue-bg">
        <img src={blockquote} alt="open blockquote" className="quote" />
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
