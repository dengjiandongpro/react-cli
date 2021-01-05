import React from 'react'; 
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import './assets/style/index.css'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import {Provider} from 'react-redux';
import store from './store'
import Counter from './components/loadable'
import Home from './components/home'
import NoaMatch from './components/404'

class App extends React.Component {
    render(){ 
      return( 
        <div>
            <ul>
                <li>
                    <Link to='/'>welcome</Link>
                </li>
                <li>
                    <Link to='/couter'>counter</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={() => <Home/>}/>
                <Route path='/couter' component={() => <Counter/>}></Route>
                <Route component={() => <NoaMatch/>}></Route>
            </Switch>
          </div>
      );
    }
  }

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )