import React from 'react';
import Header from './components/Header';
import RecipeInfo from './components/RecipeInfo';
import SearchResults from './components/SearchResults';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="overlay hidden"></div>
      <Header />
      <SearchResults />
      <RecipeInfo />
    </div>
  );
};

export default App;
