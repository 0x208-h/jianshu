import React from 'react';
import { Provider } from 'react-redux'
import Header from './common/Header';
// import { store } from './toolkit/store';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
