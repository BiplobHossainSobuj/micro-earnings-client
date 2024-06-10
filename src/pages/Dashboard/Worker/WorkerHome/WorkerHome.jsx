import React from 'react';
import ApprovedSubmission from './ApprovedSubmission';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaCoins } from 'react-icons/fa';

const WorkerHome = () => {
    const { user } = useAuth();
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
            <div className="stats shadow w-full my-10">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <FaCoins></FaCoins>
                    </div>
                    <div className="stat-title">Total Coins</div>
                    <div className="stat-value text-primary">{stats?.coin?.coin}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Submissions</div>
                    <div className="stat-value text-secondary">{stats?.submissions}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">${stats?.totalEaning}</div>
                    <div className="stat-title">Total Earnings</div>
                    
                </div>

            </div>
            <ApprovedSubmission></ApprovedSubmission>
        </div>
    );
};

export default WorkerHome;