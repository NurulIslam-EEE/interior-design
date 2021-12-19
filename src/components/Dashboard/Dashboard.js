import React from 'react';
import {
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import AddService from '../AddService/AddService';

import './Dashboard.css';

const Dashboard = () => {


    return (
        <div className='p-0 m-0 row dashboard'>
            <div className='d-flex justify-content-between'>
                <Link className='p-md-5 dashboard-logo ' to='/'><h5 >HELICONIA</h5></Link>
                <h5 className='p-md-5 dashboard-logo '><i class="fas fa-user"></i> </h5>
                <h5 className='p-md-5 dashboard-logo'><i class="fas fa-envelope"></i> </h5>
            </div>


            <div className='col-md-2 dashboard-menu'>
                <ul>
                    <li>
                        <Link to='addServices'>Add Service</Link>
                    </li>

                    <li>
                        <Link to=''>My Orders</Link>
                    </li>
                    <li>
                        <Link to=''>Review</Link>
                    </li>

                    <li>
                        <Link to=''>Make Admin</Link>
                    </li>

                    <li>
                        <Link to=''>Manage Products</Link>
                    </li>

                    <li>
                        <Link to=''>Manage Orders</Link>
                    </li>
                    <button >Logout</button>
                </ul>

            </div>
            <div className='col-md-10' style={{ background: 'white' }}>

                <Routes>
                    <Route path='addServices' element={<AddService />} />


                </Routes>
            </div>

        </div>
    );
};

export default Dashboard;