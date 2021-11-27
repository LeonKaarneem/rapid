import Layout from '../../components/layout.js';
import AccountDetailsCard from "../../components/accountDetailsCard";
import AddFundsCard from "../../components/addFundsCard";
import TransferFundsCard from "../../components/transferFundsCard";
import TransactionsCard from "../../components/transactionsCard";
import {useState} from "react";
import './userDashboardPage.css';

const closeIcon = () => {
    return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.78545 7.87964e-06L0.00585938 1.7796L16.2253 17.9991L18.0049 16.2195L1.78545 7.87964e-06Z" fill="#1D66FF"/>
            <path d="M16.2195 0.000929157L0 16.2204L1.77959 18L17.9991 1.78052L16.2195 0.000929157Z" fill="#1D66FF"/>
        </svg>
    )
}

const UserDashboardPage = () => {
    const [showModal, setShowModal] = useState(false);

    const ModalComponent = () => {
        return (
            <div className="ModalLayout">
                <div className="ModalLayoutContent">
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 500}}>Send funds to recipient
                            <div onClick={() => setShowModal(false)} className="closeIconContainer">{closeIcon()}</div>
                        </div>
                        <div>content</div>
                    </div>
                    <div>footer</div>
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
                        <AccountDetailsCard accountName="John Doe personal account"
                                            accountNumber="ISIN233215421341254124"
                                            availableFunds={"[\"5.00 $\", \"6.02 $\", \"214.00 £\"]"}/>
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

export default UserDashboardPage;
