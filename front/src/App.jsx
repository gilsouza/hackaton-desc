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
import { CareersProvider } from './hooks/Careers';

function App() {
  return (
    <div className="App">
      <CareersProvider>
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
      </CareersProvider>
    </div>
  );
}

export default App;
