import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [order, setOrder] = useState();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://murmuring-meadow-62116.herokuapp.com/dashboard/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email]);
    return (
        <div>
            <h1>My Order </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {order?.map((ord, index) => <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                            <p> {ord?.name}</p>
                            <p>Advance Payment: ${ord?.price}</p>
                            <Link to={`/dashboard/payment/${ord?._id}`}><button>Pay</button></Link>


                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;