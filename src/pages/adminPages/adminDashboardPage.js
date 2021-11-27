import Layout from '../../components/layout.js';
import StatisticsMonthCard from "../../components/statisticsMonthCard";

const AdminDashboardPage = () => {
    return (
        <Layout>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{flex: '1 1 50%'}}>
                    <StatisticsMonthCard title={"Transactions"} todayValue={"21 403"} sevenDayValue={"149 821"} thirtyDayValue={"1 449 463"} />
                    <StatisticsMonthCard title={"Blacklist"} todayValue={"12"} sevenDayValue={"49"} thirtyDayValue={"139"} />
                </div>
                <div style={{flex: '1 1 50%'}}>
                    <StatisticsMonthCard title={"New Users"} todayValue={"10"} sevenDayValue={"113 349"} thirtyDayValue={"781 248"} />
                    <StatisticsMonthCard title={"Fees"} todayValue={"0.0743 ETH"} sevenDayValue={"7.0213 ETH"} thirtyDayValue={"21.1892 ETH"} />
                </div>
            </div>
        </Layout>
    );
}

export default AdminDashboardPage;
