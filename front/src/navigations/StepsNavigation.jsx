import { Route, Switch } from 'react-router-dom';
import { Step1 } from '../pages/Step1';
import { Step2 } from '../pages/Step2';
import { Step3 } from '../pages/Step3';

function StepsNavigations() {
  return (
    <Switch>
      <Route path="/avaliar/:profissao/1" exact>
        <Step1 />
      </Route>
      <Route path="/avaliar/:profissao/2" exact>
        <Step2 />
      </Route>
      <Route path="/avaliar/:profissao/3" exact>
        <Step3 />
      </Route>
    </Switch>
  );
}

export default StepsNavigations;
