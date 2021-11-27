import Card from "./card";
import './transferFundsCard.css';
import ButtonPrimary from "./buttonPrimary";
import ButtonSecondary from "./buttonSecondary";

const TransferFundsCard = (props) => {
    return (
        <Card leftHeader={"Transfer Funds"} content={Content(props)}/>
    );
};

const Content = (props) => {
    return(
        <div className="content">
            <ButtonPrimary abc={props} text={"Send to recipient"} />
            <ButtonSecondary text={"Withdraw"} />
        </div>
    );
}


export default TransferFundsCard;
