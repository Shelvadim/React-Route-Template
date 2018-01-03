import React from 'react';
import {NavLink} from 'react-router-dom';


const Header=()=>(
    <header>
       <h1>Header</h1>
       <NavLink to="/" activeClassName="is-active" exact={true}>Page1</NavLink>
       <NavLink to="/page2" activeClassName="is-active">Page2</NavLink>
       <NavLink to="/page3" activeClassName="is-active">Page3</NavLink>
       <NavLink to="/page4" activeClassName="is-active">Page4</NavLink>
    </header>
);

export default Header;