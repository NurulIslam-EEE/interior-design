import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/image-7.jpg';
import img2 from '../../images/image-8.jpg';
import img3 from '../../images/image-9.jpg';
import img4 from '../../images/image-10.jpg';
import img5 from '../../images/image-11.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../redux/slices/interiorSlice';


const Services = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchServices());
    }, []);
    const books = useSelector((state) => state.books.services)
    console.log(books)

    return (
        <div className='services'>
            <h1>Luxurious & Innovative Services</h1>
            <div className='card-container m-0'>

                <div className="service-card">
                    <div className="card-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className='card-title'>
                        <h3>Boutiques & Offices</h3>
                        <Link to='/'>Read More</Link>
                        <span></span>
                    </div>

                </div>
                <div className="service-card">
                    <div className="card-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-title'>
                        <h3>Decor</h3>
                        <Link to='/'>Read More</Link>
                        <span></span>
                    </div>

                </div>
                <div className="service-card">
                    <div className="card-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className='card-title'>
                        <h3>Maintenance</h3>
                        <Link to='/'>Read More</Link>
                        <span></span>
                    </div>

                </div>
                <div className="service-card">
                    <div className="card-img">
                        <img src={img4} alt="" />
                    </div>
                    <div className='card-title'>
                        <h3>Project Management</h3>
                        <Link to='/'>Read More</Link>
                        <span></span>
                    </div>

                </div>
                <div className="service-card">
                    <div className="card-img">
                        <img src={img5} alt="" />
                    </div>
                    <div className='card-title'>
                        <h3>Woodwork</h3>
                        <Link to='/'>Read More</Link>
                        <span></span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;