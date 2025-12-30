import './AdviceCard.css';
function AdviceCard({ advice, category }) {
    // Whenever we write JavaScript in JSX we use curl {}
    return <div className={`card ${category === "actionable" ? "actionable" : "philosophical"}`}>
        <h2>{advice}</h2>
    </div>
}

export default AdviceCard;