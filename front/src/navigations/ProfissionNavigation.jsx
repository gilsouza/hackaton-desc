import {
  Switch,
  Route,
} from 'react-router-dom';
import { Salario } from '../pages/Salario';
import { Depoimentos } from '../pages/Depoimentos';

function App() {
  return (
    <Switch>
      <Route path="/profissao/:profissao/salario" exact>
        <Salario />
      </Route>
      <Route path="/profissao/:profissao/depoimentos" exact>
        <Depoimentos />
      </Route>
    </Switch>
  );
}

export default App;
