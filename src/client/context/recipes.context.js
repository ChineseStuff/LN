import React, { useContext, useState, useMemo } from 'react';
import axios from 'axios';
const RecipesContext = React.createContext();

export function RecipesProvider({ children }) {
  axios.defaults.baseURL = 'http://localhost:5000/api';
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    debugger;
    try {
      setIsLoading(true);
      const {
        data: { articles, orderedTopTags },
      } = await axios.get('/articles');
      setArticles(articles.filter(article => article.subtype === '7'));
      setTags(orderedTopTags);
      console.log(orderedTopTags);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const value = useMemo(() => {
    debugger;
    return {
      articles,
      tags,
      isLoading,
      fetchData,
    };
  }, [articles, tags, isLoading]);

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
}

export function useRecipesContext() {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error('useRecipesContext must be inside RecipesContext');
  }

  return context;
}
