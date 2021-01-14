import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/app.scss'

import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);
