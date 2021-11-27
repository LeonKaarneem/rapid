import Card from "./card";
import './transactionsCard.css';

const TransactionsCard = () => {
    return (
        <Card leftHeader={"Transactions"} content={Content()} footer={Footer()}/>
    );
};

const Content = () => {
    return(
        <div className="contentTrans">
            <Transaction date={"27.11"} sender={"John Doe"} receiver={"Mary Joe"} sendFund={"100 $"} receiveFund={"85 £"}/>
            <Transaction date={"27.11"} sender={"John Doe"} receiver={"Mary Joe"} sendFund={"100 $"} receiveFund={"85 £"}/>
            <Transaction date={"27.11"} sender={"John Doe"} receiver={"Mary Joe"} sendFund={"100 $"} receiveFund={"85 £"}/>
            <Transaction date={"27.11"} sender={"John Doe"} receiver={"Mary Joe"} sendFund={"100 $"} receiveFund={"85 £"}/>
            <Transaction date={"27.11"} sender={"John Doe"} receiver={"Mary Joe"} sendFund={"100 $"} receiveFund={"85 £"}/>
        </div>
    );
}

const Footer = () => {
    return(
        <div className="footerContent">
            <div>See more</div>
            <FooterIcon />
        </div>
    );
}
const FooterIcon = () => {
    return(
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4187 20.125L10.5437 19.25L15.7062 14.1313L10.5437 9.01251L11.4187 8.13751L17.4562 14.1313L11.4187 20.125Z" fill="#1D66FF"/>
        </svg>
    );
}

const Transaction = (props) => {
    return(
        <div className="transaction">
            <div>
                {props.date}
            </div>
            <div>
                {props.sender}
            </div>
            <div>
                {props.sendFund}
            </div>
            <div>
                {props.receiver}
            </div>
            <div>
                {props.receiveFund}
            </div>
        </div>
    );
}


export default TransactionsCard;
