import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Withdrawals = () => {
    const {user} = useAuth()
    const { register, handleSubmit } = useForm();
    const [amount, setAmount] = useState(0);
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        // console.log(data);
        const withdrawInfo = {
            workerEmail:user.email,
            workerName:user.displayName,
            withdrawCoin:data.coins,
            withdrawAmount:parseFloat(amount),
            paymentSystem:data.paymentMethod,
            paymentNumber:data.acNumber,
            withdrawTime: new Date(),
        } 
        console.log(withdrawInfo);
        if(data.coins>300){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your can't withdraw more than 300 coins",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            const res = await axiosSecure.post('/withdraws',withdrawInfo);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your withdraw request has received",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
       
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input {...register("firstName", { required: true })} /> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Coin To Withdraw</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input onInput={(e) =>setAmount(parseInt(e.target.value)/20)}
                            {...register("coins", { required: true})}
                             type="number" className="grow" placeholder="How many Coin you wanted to withdraw" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Withdraw Amount</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input value={amount} defaultValue={0} {...register("amount")} type="text" className="grow" disabled/>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select Payment Method</span>
                    </label>
                    <select className="select select-bordered" {...register("paymentMethod")}>
                        <option value="bkash">Bkash</option>
                        <option value="nagad">Nagad</option>
                        <option value="rocket">Rocket</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Account Number</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("acNumber", { required: true })} type="number" className="grow" placeholder="account number" />
                    </label>
                </div>
                <input className="btn btn-block btn-primary" value={'Wirhdraw'} type="submit" />
            </form>
        </div>
    );
};

export default Withdrawals;