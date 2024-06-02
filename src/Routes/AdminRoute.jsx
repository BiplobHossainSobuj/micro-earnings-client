
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const {user,loading} = useAuth();
    if (loading||isAdminLoading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return<Navigate to='/'></Navigate>
};

export default AdminRoute;