import heroBook from "../../assets/hero-book-small.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          Английский
          <br />
          маленькими шагами
        </h1>
        <p>
          Короткие уроки для <br className="hero__mobile-break" /> повседневной жизни
        </p>
        <span className="hero__badge">Уровень A1–A2</span>
      </div>
      <img className="hero__image" src={heroBook} alt="" />
    </section>
  );
}

export default Hero;
