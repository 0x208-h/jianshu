import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./common/Header";
// import { store } from './toolkit/store';
import store from "./store";
// import Home from './page/home';
// import Detail from './page/detail';

const Home = lazy(() => import("@/page/Home"));
const Detail = lazy(() => import("@/page/Detail"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
