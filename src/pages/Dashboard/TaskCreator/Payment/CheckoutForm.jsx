import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const CheckoutForm = ({amountInfo}) => {
    const {amount,coins} = amountInfo;
    console.log(amount,coins,'from checkour form');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    useEffect(() => {
        if (amount > 0) {
            axiosSecure.post('/create-payment-intent', { amount: amount })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, amount])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const payment = {
            email: user.email,
            name:user.displayName,
            amount: parseInt(amount),
            date: new Date(),
            coinPurchase:coins
        }
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName || 'annonymus'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                //save the payment in db
                // const payment = {
                //     email: user.email,
                //     name:user.displayName,
                //     amount: parseInt(amount),
                //     transactionId: paymentIntent.id,
                //     date: new Date(),
                //     coinPurchase:coins
                // }
                const res = await axiosSecure.post('/payments', payment);
                console.log(res.data);
                if (res.data?.paymentResult?.insertedId) {
                    axiosSecure.patch(`/users/taskCreator/${payment.email}`,{coins})
                    .then(res=>{
                        console.log(res.data)

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    })
                }
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;