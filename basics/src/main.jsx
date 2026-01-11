// named import
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// default import
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'
import { resetCounterAction, addCounterAction, subtractCounterAction } from './redux/actions/counterAction'

const store = configureStore();

console.log(`The state is ${JSON.stringify(store.getState())}`)

// Action object should have mandatory 'type' property
store.dispatch(resetCounterAction())
console.log(`After dispatching RESET action, The state is ${JSON.stringify(store.getState())}`)
store.dispatch(addCounterAction(10))
console.log(`After dispatching ADD action, The state is ${JSON.stringify(store.getState())}`)
store.dispatch(subtractCounterAction())
console.log(`After dispatching SUBTRACT action, The state is ${JSON.stringify(store.getState())}`)

// StrictMode => Highlight deprecated features of React
// Dev Server => Two times it would render the component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
