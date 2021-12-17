import React from 'react';
import { useForm } from "react-hook-form";
import pic from '../../images/collov-home-design-HxRvdKHVAYY-unsplash.jpg';

const Enquiry = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row m-0 p-5 enquiry">
            <div className="col-md-6">
                <img src={pic} alt="" />
            </div>
            <div className="col-md-6">
                <h2>ENQUIRY FORM</h2>
                <p>What does your signature style look like? Find out. Book a consultation with our Design Lead</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name: </label>
                    <input id='name' placeholder='name' {...register("name", { required: true })} /> <br />
                    {errors.name && <span>This field is required</span>} <br />
                    <label htmlFor="phone">Phone: </label>
                    <input id='phone' placeholder='Phone Number' type='number' {...register("phone", { required: true })} /> <br />
                    {errors.phone && <span>This field is required</span>} <br />
                    <label htmlFor="email">Email: </label>
                    <input id='email' placeholder='Email' {...register("email", { required: true })} /> <br />
                    {errors.email && <span>This field is required</span>} <br />
                    <label htmlFor="message">Enquiry: </label>
                    <textarea id='message' placeholder='Enquiry Details' {...register("message", { required: true })} /> <br />
                    {errors.message && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Enquiry;