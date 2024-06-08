import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const WithdrawRequest = () => {
    const [withdraws, setWithdraws] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/withdraws`)
            .then(res => {
                setWithdraws(res.data);
            })
    }, [])
    const handlePaymentSuccess =async (withdraw)=>{
        const res = await axiosSecure.delete(`/withdraws/${withdraw._id}`);
        console.log(res.data);
        if(res.data.deletedCount){
            updateWorkerCoin(withdraw.withdrawCoin,withdraw.workerEmail)
        }
        // updateWorkerCoin(withdraw.withdrawCoin,withdraw.workerEmail)
    }
    const updateWorkerCoin = async(coin,email)=>{
        const deductedCoin = {deductedCoin:coin};
        const res = await axiosSecure.patch(`/users/${email}`,deductedCoin)
        console.log(res.data);
        
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>WorkerName</th>
                        <th>Withdraw Coin</th>
                        <th>WithDraw Amount</th>
                        <th>Payment Number</th>
                        <th>payment System</th>
                        <th>Withdraw Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        withdraws.map((withdraw,index)=>
                            <tr key={withdraw._id}>
                            <td>{index+1}</td>
                        <td>
                            {withdraw.workerName}
                        </td>
                        <td>
                            {withdraw.withdrawCoin}
                        </td>
                        <td>{withdraw.withdrawAmount}</td>
                        <td>{withdraw.paymentNumber}</td>
                        <td>{withdraw.paymentSystem}</td>
                        <td>{withdraw.withdrawTime}</td>
                        <td><button onClick={()=>handlePaymentSuccess(withdraw)} className='btn'>Make Succesfull</button></td>
                    </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default WithdrawRequest;