import { resetCounterAction, addCounterAction, subtractCounterAction } from "./redux/actions/counterAction";
import { configureStore } from "./redux/configureStore";

function App() {
    return <>
        <h1>Hello Redux!</h1>
    </>
}

const store = configureStore();

console.log(`The state is ${JSON.stringify(store.getState())}`)

// Action object should have mandatory 'type' property
store.dispatch(resetCounterAction())
console.log(`After dispatching RESET action, The state is ${JSON.stringify(store.getState())}`)
store.dispatch(addCounterAction(10))
console.log(`After dispatching ADD action, The state is ${JSON.stringify(store.getState())}`)
store.dispatch(subtractCounterAction())
console.log(`After dispatching SUBTRACT action, The state is ${JSON.stringify(store.getState())}`)

export default App;