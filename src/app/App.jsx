import React, {createContext, useState,useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row,Col} from 'react-bootstrap';
import {Login001Contariner, Login002Contariner} from '../screen/login';
import SampleContainer from 'screen/Sample01/SampleContainer';
import SampleContainer2 from 'screen/Sample02/SampleContainer2';
import SampleContainer3 from 'screen/Sample03/SampleContainer3';
import SampleContainer4 from 'screen/Sample04/SampleContainer4';
  
import { NavLink, BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import {PrivateRoute, useAuth, authContext, ProvideAuth} from 'context/AuthContext'
import {SideMenuContainer, useSideMenu,ProvideSideMenu} from 'context/SideMenuContext'
import { Page } from 'component';

const App = () => {

  return  <>
      <ProvideAuth>
        <ProvideSideMenu>
              <Router>
                <Route path="*" render={({location}) =>
                  <SwitchTransition mode="out-in">
                  <CSSTransition  key={location.key} timeout={300} classNames="fade">
                    <Switch location={location}>
                      <PrivateRoute exact path="/">
                        <Page>
                          <SampleContainer />
                        </Page>
                      </PrivateRoute>
                      <PrivateRoute path="/Sample2">
                        <Page>
                          <SampleContainer2 />
                        </Page>
                      </PrivateRoute>
                      <PrivateRoute path="/Sample3">
                        <Page>
                          <SampleContainer3 />
                        </Page>
                      </PrivateRoute>
                      <PrivateRoute path="/Sample4">
                        <Page>
                          <SampleContainer4 />
                        </Page>
                      </PrivateRoute>
                      <Route exact path="/Login001" component={()=><Page><Login001Contariner/></Page>}></Route>
                      <Route exact path="/Login002" component={()=><Page><Login002Contariner/></Page>}></Route>
                    </Switch>
                  </CSSTransition>
                  </SwitchTransition>
                }>
                </Route>
              </Router> 
            </ProvideSideMenu>
          </ProvideAuth>
          </>
}


export default App;