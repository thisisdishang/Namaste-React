import { connect } from "react-redux";
import MyButton from "../MyButton/MyButton";

function Counter() {
    return <div>
        <h1>Counter</h1>
        <MyButton type="primary" />
    </div>
}

// connect()(Counter) : currying

/*
    Higher Order Component (HOC)
    Function which takes a component as an argument and returns a new component
*/

export default connect()(Counter);