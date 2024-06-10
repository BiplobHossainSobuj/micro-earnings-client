import React from 'react';
import WithdrawRequest from './WithdrawRequest';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaCoins } from 'react-icons/fa';

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: adminStats = [], refetch } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adminStats`);
            return res.data;
        }
    })
    // const totalCoin = adminStats.coins.reduce(((accumulator, currentItem) => accumulator + parseFloat(currentItem.coin), 0))
    // const amount = adminStats.payments.reduce(((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0))
    // console.log(totalCoin);
    console.log(adminStats);
    return (
        <div>
            <div className="stats shadow w-full my-10">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <FaCoins></FaCoins>
                    </div>
                    <div className="stat-title">Total Coins</div>
                    <div className="stat-value text-primary">{adminStats?.total}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Payment</div>
                    <div className="stat-value text-secondary">{adminStats.pay}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src='https://img.freepik.com/premium-vector/vector-professional-icon-business-illustration-line-symbol-people-management-career-set-c_1013341-79442.jpg?w=826' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">${adminStats?.users}</div>
                    <div className="stat-title">Total Users</div>
                    
                </div>

            </div>
            <WithdrawRequest></WithdrawRequest>
        </div>
    );
};

export default AdminHome;