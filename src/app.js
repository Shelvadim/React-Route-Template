import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//git remote set-url origin https://github.com/Shelvadim/React-Route-Template.git

const Page1=()=>(
    <div>
        Page1 component1
    </div>
);

const Page2=()=>(
    <div>
        Page2 component!!!!
    </div>
);

const Page3=()=>(
    <div>
        Page3 component!
    </div>
);

const Page4=()=>(
    <div>
        Page4 component!
    </div>
);

const NotFoundPage=()=>(
    <div>
       404! Page not found
    </div>
);

const routes=(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={Page1} exact={true}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Route path="/page4" component={Page4}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
