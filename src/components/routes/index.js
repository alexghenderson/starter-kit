import {Switch, Route} from 'react-router-dom';

import IndexPage from '~/pages/index-page';
import NotFoundPage from '~/pages/not-found-page';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={IndexPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  )
}

export default Routes;