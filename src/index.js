import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import { reducer } from './reducer';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer, window.REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
         <BrowserRouter>
              <BaseLayout>
                   <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="/Dashboard" component={Dashboard} />
                        <Route path="/" component={App} />
                   </Switch>
                   <App />
               </BaseLayout>
         </BrowserRouter>
    </Provider>
, document.getElementById('root'));
