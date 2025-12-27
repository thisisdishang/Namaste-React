import './AdviceCard.css';
function AdviceCard(props) {
    // Whenever we write JavaScript in JSX we use curl {}
    return <div className="card">
        <h2>{props.advice}</h2>
    </div>
}

export default AdviceCard;