import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import { counter } from './index.redux'




const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():(()=>{})()
))

function Er(props) {
    return <h2>二</h2>
}
function Qi(props) {
    return <h2>七</h2>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>一</Link>
                    </li>
                    <li>
                        <Link to='/er'>二</Link>
                    </li>
                    <li>
                        <Link to='/qi'>七</Link>
                    </li>
                </ul>
                <Route path='/' exact component={App}></Route>
                <Route path='/er' component={Er}></Route>
                <Route path='/qi' component={Qi}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);