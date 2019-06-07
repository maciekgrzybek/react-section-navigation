import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider, createClient} from 'urql'

const client = createClient({
  url: 'https://rickandmortyapi.com/graphql/'
})
ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById('root'));

