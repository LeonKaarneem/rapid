import './accountDetailsCard.css';
import Card from "./card";

const AccountDetailsCard = (props) => {
    return(
        <Card leftHeader="Balance" rightHeader="Available funds" content={Content(props)}/>
    );
}

const Content = (props) => {

    let availableFundsArray = JSON.parse(props.availableFunds);

    return(
        <div className={"contentAccDetails"}>
            <div className={"contentLeftColumn"}>
                <span className={"accountName"}>{props.accountName}</span>
                <span className={"accountNumber"}>{props.accountNumber}</span>
            </div>
            <div className={"contentRightColumn"}>
                {availableFundsArray.map((value) => {
                    return <span>{value}</span>
                })}
            </div>
        </div>
    );
}



export default AccountDetailsCard;
