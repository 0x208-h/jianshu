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
const Login = lazy(() => import('@/page/Login'))
const Write = lazy(() => import('@/page/Write'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/login" element={<Login />}/>
            {/* <Route path="/detail" element={<Detail />}></Route> */}
            <Route path="/write" element={<Write />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
