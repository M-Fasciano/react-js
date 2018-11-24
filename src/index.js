import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )
const store = createStore(counter, enhancers)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl,
  // console.log(store.getState())
)

//console.log(store.getState());


render()
store.subscribe(render)