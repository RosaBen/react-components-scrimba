import BadgeBtns from "../components/BadgeBtns";

export default function Badges() {
  return (
    <main className="badges">
      <h2>Badges</h2>
      <section className="squared-badges">
        <h3>Squared</h3>
        <BadgeBtns />
      </section>
      <section className="pill-badges">
        <h3>Pill</h3>
        <BadgeBtns />
      </section>
    </main>
  );
}
