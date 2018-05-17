import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Redux 관련 import
import { createStore } from 'redux';
import reducers from './modules';
// Provider는 리액트 앱에 store를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트
import { Provider } from 'react-redux';

// store 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
