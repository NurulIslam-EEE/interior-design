import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51JvTmwKKPIXU1Tgx8SiIyxMFYTIyOKZFEBJQhEUaFN444MPUgsn6zscUL43IVaWtVmJueXwhyPsNeThjc4Pu2RtN00ZO7uUvaI')
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch(`https://murmuring-meadow-62116.herokuapp.com/dashboard/myOrder/payment/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [id])
    console.log(order)
    return (
        <div>
            <h3>Pay for {order?.name}</h3>
            <Elements stripe={stripePromise}> <CheckoutForm
                order={order} /> </Elements>
        </div>
    );
};

export default Payment;