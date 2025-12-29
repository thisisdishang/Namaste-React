import "./SearchBox.css"
function SearchBox({ placeholder, value, changeHandler }) {
    return <>
        <input className="search-box" type="text" value={value} placeholder={placeholder} onChange={changeHandler} />
    </>
}

export default SearchBox;
