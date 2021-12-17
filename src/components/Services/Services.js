import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/image-7.jpg';
import img2 from '../../images/image-8.jpg';
import img3 from '../../images/image-9.jpg';
import img4 from '../../images/image-10.jpg';
import img5 from '../../images/image-11.jpg';


const Services = () => {
    return (
        <div className="container-fluid">


            <div className='row m-0'>
                <h1>Luxurious & Innovative Services</h1>
                <div className="col-md-4 service-card">
                    <img src={img1} alt="" />
                    <div className='card-title'>
                        <h3>Boutiques & Offices</h3>
                        <Link to='/'>Read More</Link>
                    </div>

                </div>
                <div className="col-md-4 service-card">
                    <img src={img2} alt="" />
                    <div className='card-title'>
                        <h3>Boutiques & Offices</h3>
                        <Link to='/'>Read More</Link>
                    </div>

                </div>
                <div className="col-md-4 service-card">
                    <img src={img3} alt="" />
                    <div className='card-title'>
                        <h3>Boutiques & Offices</h3>
                        <Link to='/'>Read More</Link>
                    </div>

                </div>
                <div className="col-md-4 service-card">
                    <img src={img4} alt="" />
                    <div className='card-title'>
                        <h3>Boutiques & Offices</h3>
                        <Link to='/'>Read More</Link>
                    </div>

                </div>
                <div className="col-md-4 service-card">
                    <img src={img5} alt="" />
                    <div className='card-title'>
                        <h3>Boutiques & Offices</h3>
                        <Link to='/'>Read More</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;