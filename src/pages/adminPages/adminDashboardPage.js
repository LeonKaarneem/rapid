import Layout from '../../components/layout.js';
import StatisticsMonthCard from "../../components/statisticsMonthCard";

const AdminDashboardPage = () => {
    return (
        <Layout>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{flex: '1 1 50%'}}>
                    <StatisticsMonthCard title={"Transactions"} todayValue={"21 403"} sevenDayValue={"149 821"} thirtyDayValue={"1 449 463"} />
                </div>
                <div style={{flex: '1 1 50%'}}>
                    <StatisticsMonthCard title={"Transactions"} todayValue={"21 403"} sevenDayValue={"149 821"} thirtyDayValue={"1 449 463"} />
                </div>
            </div>
        </Layout>
    );
}

export default AdminDashboardPage;