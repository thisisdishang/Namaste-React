import './AbstractButton.css'
const AbstractButton = ({ label, clickHandler }) => {
    return <button className="btn" onClick={clickHandler}>{label}</button>
}

export default AbstractButton;