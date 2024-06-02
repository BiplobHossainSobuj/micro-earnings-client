import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useTaskCreator from '../hooks/useTaskCreator';

const TaskCreatorRoute = ({children}) => {
    const [isTaskCreator,isTaskCreatorLoading] = useTaskCreator();
    const {user,loading} = useAuth();
    if (loading||isTaskCreatorLoading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user && isTaskCreator) {
        return children;
    }
    return<Navigate to='/'></Navigate>
};

export default TaskCreatorRoute;