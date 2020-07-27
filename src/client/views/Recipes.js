import React, { useEffect } from 'react';
import RecipesGrid from '../components/RecipesGrid';
import TitleWithTags from '../components/TitleWithTags';
import { useRecipesContext } from '../context/recipes.context';

const Recipes = props => {
  const { articles, tags, isLoading, fetchData } = useRecipesContext();
  useEffect(() => {
    debugger;
    if ((articles.length === 0 || tags.length === 0) && !isLoading) fetchData();
  }, [articles, tags]);

  return (
    <>
      <TitleWithTags tags={tags} isLoading={isLoading} />
      <RecipesGrid articles={articles} isLoading={isLoading} />
    </>
  );
};

export default Recipes;
