import React from 'react';

const Footer = () => {
    return (
        <div className='row m-0 footer p-3 text-start'>
            <div className="col-md-5">
                <h3>ABOUT SOLUTIONCARPENTRY</h3>
                <p>Solution Carpentry, born and raised in Europe, has been serving also many customers since 2003 in U.A.E. As a reputed interior design company based in Abu Dhabi, we make dream homes a reality. In addition, we are known to create aesthetically balanced spaces that are infinitely classic, thereby making us a highly reputable firm in the industry.</p>
            </div>
            <div className="col-md-3">
                <h3>WHAT WE DO</h3>
                <p>Services</p>
                <p>Boutiques & Offices </p>
                <p>Décor</p>
                <p>maintenance</p>
                <p>Project Management</p>
                <p>Woodwork</p>



            </div>
            <div className="col-md-4">
                <h3>CONTACT US</h3>
                <p>Mussafah M9 Abu Dhabi <br /> United Arab Emirates <br />
                    Phone:
                    +971 50 756 0282 <br />
                    Email:
                    contact@solutioncarpentry.ae
                </p>
            </div>
            <p className='text-center'>&copy; All Right Reserved</p>
        </div>
    );
};

export default Footer;