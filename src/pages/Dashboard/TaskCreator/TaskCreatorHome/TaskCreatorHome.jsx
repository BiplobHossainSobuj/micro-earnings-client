import React from 'react';
import TaskToReview from './TaskToReview';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { FaCoins } from 'react-icons/fa';

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
            <div className="stats shadow w-full my-10">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <FaCoins></FaCoins>
                    </div>
                    <div className="stat-title">Total Coins</div>
                    <div className="stat-value text-primary">{creatorStats?.coin?.coin}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Payment</div>
                    <div className="stat-value text-secondary">{creatorStats?.totalPayment}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">${creatorStats?.allPendings}</div>
                    <div className="stat-title">Pending Task</div>
                    
                </div>

            </div>
            <TaskToReview></TaskToReview>
        </div>
    );
};

export default TaskCreatorHome;