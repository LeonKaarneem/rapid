import UserDashboardPage from './pages/userPages/userDashboardPage';
import AdminDashboardPage from './pages/adminPages/adminDashboardPage';

const routes = () => [
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