import { Route, Switch } from 'react-router-dom';
import { Salario } from '../pages/Salario';
import { Depoimentos } from '../pages/Depoimentos';
import { Duvidas } from '../pages/Duvidas';
import { Geral } from '../pages/Geral';
import { Avaliacoes } from '../pages/Avaliacoes';

function ProfissionNavigation() {
  return (
    <Switch>
      <Route path="/profissao/:profissao/salario" exact>
        <Salario />
      </Route>
      <Route path="/profissao/:profissao/duvidas" exact>
        <Duvidas />
      </Route>
      <Route path="/profissao/:profissao/depoimentos" exact>
        <Depoimentos />
      </Route>
      <Route path="/profissao/:profissao/avaliacoes" exact>
        <Avaliacoes />
      </Route>
      <Route path="/profissao/:profissao/" exact>
        <Geral />
      </Route>
    </Switch>
  );
}

export default ProfissionNavigation;
