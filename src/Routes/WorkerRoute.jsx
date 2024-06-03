import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useWorker from '../hooks/useWorker';

const WorkerRoute = ({children}) => {
    const [isWorker,isWorkerLoading] = useWorker();
    const {user,loading} = useAuth();
    if (loading||isWorkerLoading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user && isWorker) {
        return children;
    }
    return<Navigate to='/'></Navigate>
};

export default WorkerRoute;