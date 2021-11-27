import './card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="cardHeader">
                    <div>{props.leftHeader}</div>
                    <div>{props.rightHeader}</div>
                </div>
                <div className="cardContent">
                    <div>{props.content}</div>
                </div>
            </div>
            <div className="cardFooter">
                <div>{props.footer}</div>
            </div>
        </div>
    );
};

export default Card;
