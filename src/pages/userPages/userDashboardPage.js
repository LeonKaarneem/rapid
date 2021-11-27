import Layout from '../../components/layout.js';
import AccountDetailsCard from "../../components/accountDetailsCard";
import AddFundsCard from "../../components/addFundsCard";

const UserDashboardPage = () => {
    return (
        <Layout>
            <AccountDetailsCard accountName="John Doe personal account" accountNumber="ISIN233215421341254124" availableFunds={"[\"5.00 €\", \"6.02 $\", \"214.00 £\"]"}/>
            <AddFundsCard />
        </Layout>
    );
}

export default UserDashboardPage;