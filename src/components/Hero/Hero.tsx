import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero" aria-label="Banner principal">
      <div className="hero__content">
        <div className="hero__text">
          <h2 className="hero__title">
            Venha conhecer nossas<br />promoções
          </h2>
          <p className="hero__subtitle">
            <span className="hero__discount">50% Off</span> nos produtos
          </p>
          <a href="#produtos" className="hero__button">
            Ver produto
          </a>
        </div>
      </div>
    </section>
  );
};
