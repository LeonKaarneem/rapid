import Card from "./card";
import './statisticsMonthCard.css';

const StatisticsMonthCard = (props) => {
    return (
        <Card leftHeader={props.title} content={Content(props)} />
    );
};

const Content = (props) => {
    return(
        <div className="contentStatMonth">
            <div className="contentStatMonthEntry">
                <span className="statMonthTitle">today</span>
                <span className="statMonthValue">{props.todayValue}</span>
            </div>
            <div className="contentStatMonthEntry">
                <span className="statMonthTitle">last 7 days</span>
                <span className="statMonthValue">{props.sevenDayValue}</span>
            </div>
            <div className="contentStatMonthEntry">
                <span className="statMonthTitle">last 30 days</span>
                <span className="statMonthValue">{props.thirtyDayValue}</span>
            </div>
        </div>
    );
};



export default StatisticsMonthCard;
