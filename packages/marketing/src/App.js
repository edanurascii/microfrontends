import React, { useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

// Redux
import {
    setTestReduxChange
} from '../redux'
import store from '../redux/store'

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ({ history }) => {

    useEffect(() => {
        setTimeout(() => store.dispatch(setTestReduxChange()), 3000)
    }, [])

    return <div>
        <StylesProvider generateClassName={ generateClassName }>
            <Router history={ history } >
                <Switch>
                    <Route exact path="/pricing" component={ Pricing } />
                    <Route path="/" component={ Landing } />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};
