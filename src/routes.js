import UserDashboardPage from './pages/userPages/userDashboardPage';
import AdminDashboardPage from './pages/adminPages/adminDashboardPage';
import User2Page from "./pages/userPages/user2Page";

const routes = () => [
    {
        path: '/',
        element: <User2Page />,
    },
    {
        path: '/dashboard',
        element: <UserDashboardPage />,
    },
    {
        path: '/admin/dashboard',
        element: <AdminDashboardPage />,
    }
];

export default routes;