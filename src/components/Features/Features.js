import React from 'react';
import pic1 from '../../images/minh-pham-OtXADkUh3-I-unsplash.jpg';

const Features = () => {
    return (
        <div>
            <div className="row features m-0 p-md-5">
                <div className="col-md-6">
                    <img src={pic1} alt="" />
                </div>
                <div className="col-md-6 text-start">
                    <h1>Talented <br />
                        designers at your service!</h1> <br /> <br />
                    <p>Heliconia is the name that comes to mind every time homeowners imagine their home in a certain way. We are a reliable source of CARPENTERS & DESIGNERS who have mastered the art of delivering impeccable KITCHEN, INTERIOR DESIGN and architectural services. We leave nothing unnoticed – from planning to execution, our team supervises and assists at every corner.</p>
                    <div className="d-flex">
                        <h1 style={{ fontSize: '70px', marginRight: '10px', color: 'darkblue', borderTop: '2px solid black', borderBottom: '2px solid black' }}>2004</h1>
                        <p>
                            SINCE WE DELIVERED OUR FIRST PROJECT AND STILL WE ARE RUNNING HIGH ON GROWTH. 20+ YEARS EXPERIENCE WORLDWIDE 1000+ HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;