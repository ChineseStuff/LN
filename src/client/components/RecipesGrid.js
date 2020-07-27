import React from 'react';
import RecipeCard from './RecipeCard';

const RecipesGrid = ({ articles, isLoading }) => {
  return (
    <section className='cards'>
      {!isLoading ? (
        articles.map(article => (
          <RecipeCard key={article._id} article={article} />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </section>
  );
};

export default RecipesGrid;
