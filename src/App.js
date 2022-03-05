import './styles/bootstrap.scss';
import './styles/global.scss';

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import {MainLayout} from './components/layout/MainLayout/MainLayout';
import {Homepage} from './components/views/Homepage/Homepage';
import {NotFound} from './components/views/NotFound/NotFound';
import Contact from './components/views/Contact/Contact';
import Products from './components/views/Products/Products';
import AboutUs from './components/views/AboutUs/AboutUs';
import {ProductSingle} from './components/views/ProductSingle/ProductSingle';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:id" component={ProductSingle} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export {App};
