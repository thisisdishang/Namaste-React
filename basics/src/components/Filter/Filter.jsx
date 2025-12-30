import "./Filter.css"
const Filter = ({ value, changeHandler }) => {
    return <select className="filter" onChange={changeHandler}>
        <option value="all" selected={value === "all"}>All</option>
        <option value="actionable" selected={value === "actionable"}>Actionable</option>
        <option value="philosophical" selected={value === "philosophical"}>Philosophical</option>
    </select>
}

export default Filter;