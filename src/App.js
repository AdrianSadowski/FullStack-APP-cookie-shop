import './styles/bootstrap.scss';
import './styles/global.scss';

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import {MainLayout} from './components/layout/MainLayout/MainLayout';
import {Homepage} from './components/views/Homepage/Homepage';
import {NotFound} from './components/views/NotFound/NotFound';
import Contact from './components/views/Contact/Contact';
import Products from './components/views/Products/Products';
import ShoopingCart from './components/views/ShoopingCart/ShoopingCart';
import {ProductSingle} from './components/views/ProductSingle/ProductSingle';
import Order from './components/views/Order/Order';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/ShoopingCart" element={< ShoopingCart />} />
          <Route exact path="/product" element={< Products />} />
          <Route exact path="/product/:id" element={< ProductSingle />} />
          <Route exact path="/contact" element={< Contact />} />
          <Route exact path="/order" element={< Order />} />
          <Route exact path="/order/:id" element={< Homepage />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export {App};
