import { useState } from "react";
import "./SearchBox.css"
function SearchBox(props) {
    // destructuring the array
    const [searchValue, setSearchValue] = useState("")
    /* 
    useState is a hook=> is a JavaScript function that returns an array.
    and that array has two elements - value, function to change the value.
    */
    function changeHandler(event) {
        setSearchValue(event.target.value);
    }

    return <>
        <input className="search-box" type="text" onChange={changeHandler} placeholder={props.placeholder} />
        <h1>{searchValue}</h1>
    </>
}

export default SearchBox;
