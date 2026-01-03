import "./SearchBox.css"
import { useEffect, useRef } from "react";
function SearchBox({ placeholder, value, changeHandler }) {
    const searchBoxRef = useRef(null);
    useEffect(() => {
        searchBoxRef.current.focus();
    }, []);

    return <>
        <input ref={searchBoxRef} className="search-box" type="text" value={value} placeholder={placeholder} onChange={changeHandler} />
    </>
}

export default SearchBox;
