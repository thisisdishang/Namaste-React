import "./Filter.css"
const Filter = ({ value, changeHandler }) => {
    return <select className="filter" onChange={changeHandler}>
        <option defaultValue={value === "all"}>All</option>
        <option defaultValue={value === "actionable"}>Actionable</option>
        <option defaultValue={value === "philosophical"}>Philosophical</option>
    </select>
}

export default Filter;