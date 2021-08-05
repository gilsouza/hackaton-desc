import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Profession } from './pages/Profession';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/profissao/:profissao/*" exact>
            <Profession />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
