import { useState } from 'react';
import './CategoryFilter.scss';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'tecnologia', name: 'Tecnologia', icon: '/assets/icons/Tecnologia.png' },
  { id: 'supermercado', name: 'Supermercado', icon: '/assets/icons/Supermercados.png' },
  { id: 'bebidas', name: 'Bebidas', icon: '/assets/icons/Bebidas.png' },
  { id: 'ferramentas', name: 'Ferramentas', icon: '/assets/icons/Ferramentas.png' },
  { id: 'saude', name: 'Saúde', icon: '/assets/icons/Saúde.png' },
  { id: 'esportes', name: 'Esportes e Fitness', icon: '/assets/icons/Esportes e Fitnesspng.png' },
  { id: 'moda', name: 'Moda', icon: '/assets/icons/Moda.png' }
];

export const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('tecnologia');

  return (
    <section className="category-filter" aria-label="Filtrar por categoria">
      <div className="container">
        <div className="category-filter__grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-filter__item ${
                activeCategory === category.id ? 'category-filter__item--active' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              <div className="category-filter__icon">
                <img src={category.icon} alt={category.name} />
              </div>
              <span className="category-filter__name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
