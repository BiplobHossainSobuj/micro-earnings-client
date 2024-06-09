import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

export let amount = 0;
const PurchaseCoin = () => {
    const navigate = useNavigate();
    
    // const postPaymentWithAmount = (amount)=>{
    //     return axiosSecure.post('/create-payment-intent', { amount: amount })
    // }
    const handleGet10Coins=()=>{
        // postPaymentWithAmount(100)
        // amount=100;
        navigate('/dashboard/payment',{state:{amount:1,coins:10}});
    }
    const handleGet100Coins = ()=>{
        navigate('/dashboard/payment',{state:{amount:9,coins:100}});
    }
    const handleGet500Coins = ()=>{
        navigate('/dashboard/payment',{state:{amount:19,coins:500}});
    }
    const handleGet1000Coins = ()=>{
        navigate('/dashboard/payment',{state:{amount:39,coins:1000}});
    }
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div onClick={handleGet10Coins} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">10 Coins For $1 !</h2>
                    <p>you have to pay $1 to get 10 coins</p>
                </div>
            </div>
            <div onClick={handleGet100Coins} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">100 Coins For $9 !</h2>
                    <p>you have to pay $1 to get 100 coins</p>
                </div>
            </div>
            <div onClick={handleGet500Coins} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">500 Coins For $19 !</h2>
                    <p>you have to pay $1 to get 500 coins</p>
                </div>
            </div>
            <div onClick={handleGet1000Coins} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">100 Coins For $39 !</h2>
                    <p>you have to pay $1 to get 1000 coins</p>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCoin;
