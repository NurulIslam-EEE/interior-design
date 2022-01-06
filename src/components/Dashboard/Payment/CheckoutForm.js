import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = (props) => {
    // console.log(order)
    // const { price } = props?.order;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {

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
            setError(error.message);
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }





    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '25px',
                                color: '#02092b',
                                '::placeholder': {
                                    color: '#02092b',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay $
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CheckoutForm;