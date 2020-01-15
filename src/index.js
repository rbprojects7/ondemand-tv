import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';
import { NotFound } from './views';
import * as serviceWorker from './serviceWorker';
import { routes } from './constants';
import { MemoizedDetail, MemoizedShow } from './components';

serviceWorker.unregister();

const store = configureStore({ currentShow: {} });
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Redirect path="/" exact to={routes.defaultShowEndpoint} />
                    <Route exact path={routes.show} render={({ match }) => (<MemoizedShow match={match} />)} />
                    <Route exact path={routes.episode} render={({ match }) => (<MemoizedDetail match={match} />)} />
                    <Route render={() => (<NotFound />)} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);
