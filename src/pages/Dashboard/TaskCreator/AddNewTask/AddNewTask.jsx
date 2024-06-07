import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import axios from 'axios';
const imgHostingKey = import.meta.env.VITE_image_hosting_key;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

const AddNewTask = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image: data.taskImage[0] };
        const res = await axiosPublic.post(imgHostingApi, imgFile, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const image = res.data.data.display_url;
        if (res.data.success) {
            const taskInfo = {
                creatorName:user.displayName,
                creatorEmail:user.email,
                date:new Date(),
                taskTitle: data.taskTitle,
                taskDetails: data.taskDetails,
                taskQuantity: data.taskQuantity,
                payableAmount:data.payableAmount,
                completionDate:data.completionDate,
                submissionInfo:data.submissionInfo,
                taskImageUrl: image,
            };
            const res = await axiosSecure.post('/tasks',taskInfo)
            console.log(res.data);
            
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input {...register("firstName", { required: true })} /> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("taskTitle", { required: true })} type="text" className="grow" placeholder="Task Title" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Details</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("taskDetails", { required: true })} type="text" className="grow" placeholder="Task Details" />
                    </label>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Quantity</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("taskQuantity", { required: true })} type="number" className="grow" placeholder="Task Quantity" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Payable Amount</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("payableAmount", { required: true })} type="number" className="grow" placeholder="Amount per task" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Completion Date</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("completionDate", { required: true })} type="date" className="grow" placeholder="Completion Date" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Submission Info</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("submissionInfo", { required: true })} type="text" className="grow" placeholder="Submission Information" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Image</span>
                    </label>
                    <input {...register("taskImage", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className="btn btn-block btn-primary" value={'Add Task'} type="submit" />
            </form>
        </div>
    );
};

export default AddNewTask;