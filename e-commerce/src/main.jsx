import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store  from './store.js'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
)
