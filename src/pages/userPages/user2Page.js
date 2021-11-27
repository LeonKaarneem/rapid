import Layout from '../../components/layout.js';
import AccountDetailsCard from "../../components/accountDetailsCard";
import AddFundsCard from "../../components/addFundsCard";
import TransferFundsCard from "../../components/transferFundsCard";
import TransactionsCard from "../../components/transactionsCard";
import {useEffect, useState} from "react";
import './userDashboardPage.css';
import axios from 'axios';

const closeIcon = () => {
    return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.78545 7.87964e-06L0.00585938 1.7796L16.2253 17.9991L18.0049 16.2195L1.78545 7.87964e-06Z" fill="#1D66FF"/>
            <path d="M16.2195 0.000929157L0 16.2204L1.77959 18L17.9991 1.78052L16.2195 0.000929157Z" fill="#1D66FF"/>
        </svg>
    )
}

const UserDashboardSendForm = () => {
    const [balance, setBalance] = useState("");
    const [ID, setID] = useState("");

    const onFinish = async () => {
        const response1 = await axios.post('http://localhost:8080/add', {
            id: 1,
            name: "person1",
            amount: (parseFloat(balance) * 1.13).toFixed(1),

        }).catch((err) => {
            console.log(err);
        })
        console.log(response1);
        const response2 = await axios.post('http://localhost:8080/remove', {
            id: 2,
            name: "person2",
            amount: parseFloat(balance),

        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <form onSubmit={onFinish()} style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                Code
                <input
                    value={ID}
                    onChange={e => setID(e.target.value)}
                    placeholder="ABC123456789"
                    type="text"
                    name="code"
                    className="inputHolder"
                    required
                />
            </div>
            <div>
                Amount
                <input
                    value={balance}
                    onChange={e => setBalance(e.target.value)}
                    placeholder="e.g 10.00"
                    type="text"
                    name="balance"
                    className="inputHolder"
                    required
                />
            </div>
            <div>{ balance && !isNaN(balance) && "Amount in EUR: " + (parseFloat(balance) * 1.13).toFixed(2) + "$"}</div>
            <div><button type="submit" disabled={isNaN(balance)}>Submit</button></div>
        </form>
    )
}



const User2Page = () => {
    const getBalance = async () => {
        const response = await axios.get('http://localhost:8080/2/amount').catch((err) => {
            console.log(err);
        })
        console.log(response);
        if (response && response.data) {
            setBalance(response.data);
        }
        setBalance(response)
    }

    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState(0);


    useEffect(() => {getBalance()}, []);

    const ModalComponent = () => {
        return (
            <div className="ModalLayout">
                <div className="ModalLayoutContent">
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 500}}>Send funds to recipient
                            <div onClick={() => setShowModal(false)} className="closeIconContainer">{closeIcon()}</div>
                        </div>
                        <div style={{textAlign: 'center'}}><UserDashboardSendForm/></div>
                    </div>
                </div>
            </div>
        )
    }

    const modalSet = () => {
        showModal ? setShowModal(false) : setShowModal(true);
    }

    return (
        <Layout>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{flex: '1 1 40%'}}>
                    <div style={{width: '100%'}}>
                        <AccountDetailsCard accountName="Person 2 personal account"
                                            accountNumber="ISIN233215421341254124"
                                            availableFunds={`[\"${(parseFloat(balance.data)).toFixed(2)}  €\"]`}/>
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{width: '50%', flex: '1 1 160px'}}>
                            <AddFundsCard/>
                        </div>
                        <div style={{width: '50%', flex: '1 1 160px'}}>
                            <TransferFundsCard abc={modalSet}/>
                        </div>
                    </div>
                </div>
                <div style={{flex: '1 1 60%'}}>
                    <TransactionsCard/>
                </div>
            </div>
            {showModal && <ModalComponent/>}
        </Layout>
    );
}

export default User2Page;
