import React from 'react';
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
import AddService from '../AddService/AddService';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';
import MyOrder from './MyOrder';
import Payment from './Payment/Payment';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className='p-2 m-0 row dashboard'>
            <div className='d-flex justify-content-between'>
                <Link className='p-md-5 dashboard-logo ' to='/'><h5 >HELICONIA</h5></Link>
                <h5 className='p-md-5 dashboard-logo '><i class="fas fa-user"></i> {user?.displayName} </h5>
                <h5 className='p-md-5 dashboard-logo'><i class="fas fa-envelope"> {user?.email}</i> </h5>
            </div>


            <div className='col-md-2 dashboard-menu'>
                <ul>
                    <li>
                        <Link to='addServices'>Add Service</Link>
                    </li>

                    <li>
                        <Link to='myOrder'>My Orders</Link>
                    </li>
                    {/*
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
                    </li> */}
                    <button >Logout</button>
                </ul>

            </div>
            <div className='col-md-10 p-md-4' style={{ background: 'whitesmoke' }}>

                <Routes>
                    <Route path='addServices' element={<AddService />} />
                    <Route path={`/myOrder`} element={<MyOrder />} />
                    <Route path={`/payment/:id`} element={<Payment />} />


                </Routes>
            </div>

        </div>
    );
};

export default Dashboard;