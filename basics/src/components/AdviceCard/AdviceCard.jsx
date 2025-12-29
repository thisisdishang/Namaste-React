import './AdviceCard.css';
function AdviceCard({ advice }) {
    // Whenever we write JavaScript in JSX we use curl {}
    return <div className="card">
        <h2>{advice}</h2>
    </div>
}

export default AdviceCard;