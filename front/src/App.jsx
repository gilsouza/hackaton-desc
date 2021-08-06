import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Profession } from './pages/Profession';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';
import { GlobalStyle } from './styles/global-style';
import { CareersProvider } from './hooks/Careers';
import { Avaliar } from './pages/Avaliar';
import { User } from './pages/User';
import { Rankings } from './pages/Rankings';

function App() {
  return (
    <div className="App">
      <CareersProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Search />
            </Route>
            <Route path="/profissao/:profissao/*" exact>
              <Profession />
            </Route>
            <Route path="/avaliar/:profissao/:step" exact>
              <Avaliar />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/rankings" exact>
              <Rankings />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CareersProvider>
    </div>
  );
}

export default App;
