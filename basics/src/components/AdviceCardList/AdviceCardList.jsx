import AdviceCard from "../AdviceCard/AdviceCard";
import "./AdviceCardList.css"
function AdviceCardList(props) {
    return <div className="advice-card-list">
        {props.advices.map(advice => <AdviceCard advice={advice} />)}
    </div>
}

export default AdviceCardList;