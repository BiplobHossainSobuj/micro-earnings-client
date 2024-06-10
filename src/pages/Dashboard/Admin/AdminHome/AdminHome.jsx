import React from 'react';
import WithdrawRequest from './WithdrawRequest';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

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
            <div>Users:{adminStats.users}</div>
            <div>Coin:{adminStats.total}</div>
            <div>Payment:{adminStats.pay}</div>
            <WithdrawRequest></WithdrawRequest>
        </div>
    );
};

export default AdminHome;