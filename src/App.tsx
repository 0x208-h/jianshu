import React, { lazy } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './common/Header';
// import { store } from './toolkit/store';
import store from './store';
import Home from './page/home';
import Detail from './page/detail';
function App() {

  // const Home = lazy(() => import('@/page/home'))
  // const Detail = lazy(() => import('@/page/detail'))
  return (
    <Provider store={store}>
      <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/detail" element={ <Detail />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
