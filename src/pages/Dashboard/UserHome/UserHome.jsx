import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAdmin from '../../../hooks/useAdmin';
import useTaskCreator from '../../../hooks/useTaskCreator';
import AdminHome from '../Admin/AdminHome/AdminHome';
import TaskCreatorHome from '../TaskCreator/TaskCreatorHome/TaskCreatorHome';
import WorkerHome from '../Worker/WorkerHome/WorkerHome';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [isTaskCreator] = useTaskCreator();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })
    return (
        <div>
            <h3>{users.length}</h3>
            {
                isAdmin && <AdminHome></AdminHome>
            }
            {
                isTaskCreator && <TaskCreatorHome></TaskCreatorHome>
            }
            {
                !isAdmin && !isTaskCreator && user && <WorkerHome></WorkerHome>
            }
            
        </div>
    );
};

export default UserHome;