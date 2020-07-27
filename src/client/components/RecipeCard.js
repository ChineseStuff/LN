import React from 'react';

const RecipeCard = ({ article: { promo_items, headlines, display_date } }) => {
  const dateWithFormat = new Date(display_date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className='card'>
      <div className='card__image-container'>
        <img src={promo_items.basic.url} />
      </div>
      <div className='card__content'>
        <p className='card__title text--medium'>{headlines.basic}</p>
        <div className='card__info'>
          <p className='text--medium'>{dateWithFormat}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
