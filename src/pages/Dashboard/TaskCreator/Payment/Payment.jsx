import React from 'react';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
const Payment = () => {
    const { state } = useLocation();
    console.log(state)
    return (
        <div>
            payment please!!
            <Elements stripe={stripePromise}>
                <CheckoutForm amountInfo={state}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;