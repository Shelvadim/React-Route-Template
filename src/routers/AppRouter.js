import React from 'react';
import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';





const AppRouter =() =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Page1} exact={true}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/page3" component={Page3}/>
                <Route path="/page4" component={Page4}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>    
    </BrowserRouter>
);

export default AppRouter;