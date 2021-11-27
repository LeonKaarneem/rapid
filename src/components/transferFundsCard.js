import Card from "./card";
import './transferFundsCard.css';
import ButtonPrimary from "./buttonPrimary";
import ButtonSecondary from "./buttonSecondary";

const TransferFundsCard = () => {
    return (
        <Card leftHeader={"Transfer Funds"} content={Content()}/>
    );
};

const Content = () => {
    return(
        <div className="content">
            <ButtonPrimary text={"Send to recipient"} />
            <ButtonSecondary text={"Withdraw"} />
        </div>
    );
}


export default TransferFundsCard;
