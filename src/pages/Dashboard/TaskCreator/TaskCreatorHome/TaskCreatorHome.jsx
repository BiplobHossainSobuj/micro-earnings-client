import React from 'react';
import TaskToReview from './TaskToReview';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const TaskCreatorHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: creatorStats = [], refetch } = useQuery({
        queryKey: ['creatorStats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/taskCreatorStats/${user.email}`);
            return res.data;
        }
    })
    console.log(creatorStats);
    return (
        <div>
            <div>{creatorStats.coin.coin}</div>
            <div>{creatorStats.totalPayment}</div>
            <div>{creatorStats.allPendings}</div>
            <TaskToReview></TaskToReview>
        </div>
    );
};

export default TaskCreatorHome;