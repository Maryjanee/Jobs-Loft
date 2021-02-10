import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import Recipe from '../containers/Recipe';

const App = () => (
  <Switch>
    <div className="App">
      <Route path="/" exact component={RecipeList} />
      <Route path="/recipe/:recipe" exact component={Recipe} />
      <Redirect path="/" />
    </div>
  </Switch>

);

export default App;
