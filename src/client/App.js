import React from 'react';
import './App.css';
import Recipes from './views/Recipes';
import { Switch, Route } from 'react-router-dom';
import { RecipesProvider } from './context/recipes.context';

const App = () => {
  return (
    <div className='grid'>
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <RecipesProvider>
              <Recipes />
            </RecipesProvider>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
