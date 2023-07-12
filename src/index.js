import NavBar from './navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { UserProvider } from './context';

import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';
import About from './about';

const Routes      = ReactRouterDOM.Routes;
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Spa() {
    return (
      <HashRouter basename="/">
        <div>
            <NavBar/>
            <hr/>
            <UserProvider>
            <Routes>
            <Route path="/"  exact element={<Home />}     />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login"    element={<Login />}    />
            <Route path="/deposit"  element={<Deposit />}  />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance"  element={<Balance />}  />
            <Route path="/alldata"  element={<AllData />}  />
            <Route path="/about"    element={<About />}    />  
            </Routes>
            </UserProvider>
        </div>
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
  