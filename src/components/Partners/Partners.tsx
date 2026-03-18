import './Partners.scss';

interface Partner {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const partners: Partner[] = [
  {
    id: 1,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    image: '/assets/images/Apple.jpg',
    link: '#parceiro-1'
  },
  {
    id: 2,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    image: '/assets/images/Apple.jpg',
    link: '#parceiro-2'
  }
];

export const Partners = () => {
  return (
    <section className="partners" aria-label="Nossos parceiros">
      <div className="container">
        <div className="partners__grid">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              className="partners__card"
              style={{ backgroundImage: `url(${partner.image})` }}
            >
              <div className="partners__overlay"></div>
              <div className="partners__content">
                <h2 className="partners__title">{partner.title}</h2>
                <p className="partners__description">{partner.description}</p>
                <button className="partners__button">
                  CONFIRA
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
