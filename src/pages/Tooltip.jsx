import { colorToolTips } from "../assets/scripts/data";
import TooltipComp from "../components/TooltipComp";

export default function Tooltip() {
  const darkTips = colorToolTips.filter((item) => item.class === "dark");
  const lightTips = colorToolTips.filter((item) => item.class === "light");

  return (
    <main className="tooltips">
      <h2>Tooltips</h2>
      <section className="dark">
        <h3>Dark style</h3>
        <TooltipComp tips={darkTips} />
      </section>
      <section className="light">
        <h3>Light style</h3>
        <TooltipComp tips={lightTips} />
      </section>
    </main>
  );
}
