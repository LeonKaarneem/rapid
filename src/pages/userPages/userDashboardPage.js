import Layout from '../../components/layout.js';
import AccountDetailsCard from "../../components/accountDetailsCard";
import AddFundsCard from "../../components/addFundsCard";
import TransferFundsCard from "../../components/transferFundsCard";
import TransactionsCard from "../../components/transactionsCard";

const UserDashboardPage = () => {
    return (
        <Layout>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{flex: '1 1 40%'}}>
                    <div style={{width: '100%'}}>
                        <AccountDetailsCard accountName="John Doe personal account"
                                            accountNumber="ISIN233215421341254124"
                                            availableFunds={"[\"5.00 €\", \"6.02 $\", \"214.00 £\"]"}/>
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{width: '50%', flex: '1 1 160px'}}>
                            <AddFundsCard/>
                        </div>
                        <div style={{width: '50%', flex: '1 1 160px'}}>
                            <TransferFundsCard/>
                        </div>
                    </div>
                </div>
                <div style={{flex: '1 1 60%'}}>
                    <TransactionsCard />
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboardPage;
