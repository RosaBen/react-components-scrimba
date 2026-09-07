import BannersComp from "../components/BannersComp";

export default function Banners() {
  return (
    <main className="banners">
      <h2>Banners</h2>
      <section className="multi-line">
        <h3>Multi Line</h3>
        <BannersComp />
      </section>
      <section className="single-line">
        <h3>Single Line</h3>
        <BannersComp />
      </section>
    </main>
  );
}
