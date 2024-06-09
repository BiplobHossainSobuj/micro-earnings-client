import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PurchaseHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })
    return (
        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Coin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.date}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.coinPurchase}</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default PurchaseHistory;