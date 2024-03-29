import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/Styles/Style.css'
import'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import "../src/assets/Styles/Style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
