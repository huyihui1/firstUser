import { render} from 'react-dom'
import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import App from './App'


render(
<Router>
    <Route component = {App} path="/"/>
</Router>
,
document.querySelector('#root'))