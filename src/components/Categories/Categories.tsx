import { useRef } from 'react';
import './Categories.scss';

interface Brand {
  id: number;
  name: string;
}

const brands: Brand[] = [
  { id: 1, name: 'econverse' },
  { id: 2, name: 'econverse' },
  { id: 3, name: 'econverse' },
  { id: 4, name: 'econverse' },
  { id: 5, name: 'econverse' },
  { id: 6, name: 'econverse' },
  { id: 7, name: 'econverse' },
];

export const Categories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="categories" aria-label="Navegue por marcas">
      <div className="container">
        <h2 className="categories__title">Navegue por marcas</h2>
        
        <div className="categories__carousel">
          <button 
            className="categories__nav categories__nav--prev"
            onClick={() => scroll('left')}
            aria-label="Marca anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="categories__items" ref={scrollContainerRef}>
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={`#marca-${brand.id}`}
                className="categories__item"
                aria-label={`Ver produtos da marca ${brand.name}`}
              >
                <div className="categories__logo">
                  <span className="categories__logo-ec">ec</span>
                  <span className="categories__logo-onverse">onverse</span>
                </div>
              </a>
            ))}
          </div>

          <button 
            className="categories__nav categories__nav--next"
            onClick={() => scroll('right')}
            aria-label="Próxima marca"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
