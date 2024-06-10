import React from 'react';
import ApprovedSubmission from './ApprovedSubmission';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const WorkerHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats = [], refetch } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/workerStats/${user.email}`);
            return res.data;
        }
    })
    // const totalEarnings = stats.earnings.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.payableAmount), 0);
    console.log(stats);
    return (
        <div>
            <div>Coin:{stats?.coin?.coin}</div>
            <div>Earnings:{stats?.totalEaning}</div>
            <div>Submissions:{stats?.submissions}</div>
            <ApprovedSubmission></ApprovedSubmission>
        </div>
    );
};

export default WorkerHome;