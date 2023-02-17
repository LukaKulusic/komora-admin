import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PageRouting from './PageRouting'
import Page404 from './components/Page404'
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            {/* <Redirect exact path="/" to="/login" /> */}
            <Route path='/login' component={PageRouting} />
            <PrivateRoute path='/pocetna' component={PageRouting} />
            <PrivateRoute path='/kontakt' component={PageRouting} />
            <PrivateRoute path='/spisakClanova' component={PageRouting} />
            <PrivateRoute path='/dodajClana' component={PageRouting} />
            <PrivateRoute path='/izmjeniClana' component={PageRouting} />
            <PrivateRoute path='/clanoviOdbora' component={PageRouting} />
            <PrivateRoute path='/biografija' component={PageRouting} />
            <PrivateRoute path='/vijesti' component={PageRouting} />
            <PrivateRoute path='/vijestiKategorije' component={PageRouting} />
            <PrivateRoute path='/izmijeniVijest' component={PageRouting} />
            <PrivateRoute path='/dodajVijest' component={PageRouting} />
            <PrivateRoute path='/clanoviSkupstinePg' component={PageRouting} />
            <PrivateRoute path='/clanoviSkupstineNk' component={PageRouting} />
            <PrivateRoute path='/clanoviSkupstineCt' component={PageRouting} />
            <PrivateRoute path='/clanoviSkupstineSjever' component={PageRouting} />
            <PrivateRoute path='/clanoviSkupstineJug' component={PageRouting} />
            <PrivateRoute path='/oglasi' component={PageRouting} />
            <PrivateRoute path='/dodajOglas' component={PageRouting} />
            <PrivateRoute path='/izmjeniOglas' component={PageRouting} />
            <PrivateRoute path='/onama' component={PageRouting} />
            <PrivateRoute path='/kongres' component={PageRouting} />
            <Route component={Page404}/> 
          </Switch>
      </Router>
    )
  }
}

export default App;
