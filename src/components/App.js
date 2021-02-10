import '../styles/App.scss';

import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import Recipe from '../containers/Recipe';
import Header from './Header';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <Switch>
    <div className="App">
      <Header />
      <CategoryFilter />
      <Route path="/" exact component={RecipeList} />
      <Route path="/recipe/:recipe" exact component={Recipe} />
      <Redirect path="/" />
    </div>
  </Switch>

);

export default App;
