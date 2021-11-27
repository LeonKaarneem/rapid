import Layout from '../../components/layout.js';
import AccountDetailsCard from "../../components/accountDetailsCard";

const UserDashboardPage = () => {
    return (
        <Layout>
            <AccountDetailsCard accountName="John Doe personal account" accountNumber="ISIN233215421341254124" availableFunds={"[\"5.00 €\", \"6.02 $\", \"214.00 £\"]"}/>
        </Layout>
    );
}

export default UserDashboardPage;