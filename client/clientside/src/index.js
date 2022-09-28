

import './index.css';
import App from './App';
import { createClient, Provider } from 'urql';



import ReactDOM from 'react-dom'
import * as React from 'react';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});
// client.query({
// query: gql`
//   query users {
//     users{
//       userId
//     }
//   }

// `
// }).then((result) => console.log(result));

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

