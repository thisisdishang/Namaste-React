import AdviceCard from "../AdviceCard/AdviceCard";
import "./AdviceCardList.css"
function AdviceCardList({ advices }) {
    return <div className="advice-card-list">
        {advices.map(advice => <AdviceCard advice={advice.text} key={advice.id} category={advice.category} />)}
    </div>
}

export default AdviceCardList;