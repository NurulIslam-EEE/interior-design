import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch('https://murmuring-scrubland-76989.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully')
                }
            })
        console.log(data)
        reset();
    }
    return (
        <div>
            <h2 className='m-2 text-center'>Add A Product</h2>
            <form className='m-2 text-center add-service' onSubmit={handleSubmit(onSubmit)}>

                <input type='text' placeholder="title" {...register("title", { required: true })} /><br />
                {errors.title && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="image1" {...register("image1", { required: true })} /><br />
                {errors.image1 && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="image2" {...register("image2", { required: true })} /><br />
                {errors.image2 && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="Description" {...register("description", { required: true })} /> <br />
                {errors.description && <span className='text-danger'>This field is required</span>} <br />
                <input type='number' placeholder="Price" {...register("price", { required: true })} /> <br />

                <button type="submit">Add Products</button>

            </form>
        </div>
    );
};

export default AddService;