import upload from "../assets/images/cloudUpload.svg";
export default function Cards() {
  return (
    <main className="cards">
      <h2>Cards</h2>
      <div className="card-container">
        <img src={upload} alt="upload" className="upload" />
        <section className="txt">
          <h3>Easy Deployment</h3>
          <p>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </p>
        </section>
      </div>
    </main>
  );
}
