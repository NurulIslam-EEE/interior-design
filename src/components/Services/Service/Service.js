import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Service = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://murmuring-meadow-62116.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    const bookingInfo = {
        name: service?.title,
        price: service?.price,
        email: user?.email
    }
    console.log(bookingInfo)
    const handleAddToCart = () => {
        fetch(`https://murmuring-meadow-62116.herokuapp.com/service/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added to cart successfully')
                }
            })
    }
    console.log(service)
    return (
        <div className='row p-4'>
            <div className="col-md-6">
                <img style={{ height: '50vh', width: '100%' }} src={service?.image2} alt="" />
            </div>
            <div className="col-md-6">
                <h1>{service?.title}</h1>
                <p>{service?.description}</p>
                <div className="d-flex justify-content-between">
                    <h4 className="text-start">Booking Advance: ${service?.price}</h4>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                </div>

            </div>


        </div>
    );
};

export default Service;