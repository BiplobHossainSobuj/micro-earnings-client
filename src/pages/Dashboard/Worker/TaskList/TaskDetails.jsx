import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TaskDetails = () => {
    let { state } = useLocation();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { taskTitle, taskImageUrl, _id, creatorName, creatorEmail, taskDetails, taskQuantity, payableAmount, completionDate, submissionInfo } = state;
    const handleSubmitTask = async(e)=>{
        e.preventDefault();
        const submitDetails=e.target.submitDetails.value;
        const taskSubmissionInfo = {
            taskId:_id,
            taskTitle,
            taskDetails,
            taskImageUrl,
            payableAmount,
            workerEmail:user.email,
            workerName:user.displayName,
            submitDetails,
            creatorName,
            creatorEmail,
            currentDate:new Date(),
            status:'pending'
        }
        const res = await axiosSecure.post('/submissions',taskSubmissionInfo)
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
        console.log(res.data);
    }
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={taskImageUrl} className="w-full rounded-lg shadow-2xl" />
                    <div className='bg-slate-200 w-full rounded-lg'>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className='text-5xl font-bold text-warning'>${payableAmount}
                                <small>/per task</small></p>
                            <h2 className="card-title text-3xl">{taskTitle}
                                <div className="badge">{taskQuantity}tasks</div>
                            </h2>
                            <p>{taskDetails}</p>
                            <div className="card-actions justify-between">
                                <div className='flex gap-2'>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1717752711~exp=1717756311~hmac=4b9787670d741dd70856d678fc4811bbf11cab84bf299ca09695e1637d4374b8&w=826' />
                                        </div>
                                    </div>
                                    <p>{creatorName}</p>
                                </div>
                            </div>
                            <button onClick={() => document.getElementById('my_modal_10').showModal()} className="btn btn-success btn-block text-white font-bold">Submit Task</button>
                            <dialog id="my_modal_10" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <form onSubmit={()=>handleSubmitTask(event)}>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Submit Here</span>
                                        </div>
                                        <textarea name='submitDetails' className="textarea textarea-bordered h-24" placeholder="Submission Details"></textarea>
                                    </label>
                                    <div className='flex justify-end my-2'>
                                        <input className='btn' type="submit" value={'Submit'} />
                                    </div>
                                    </form>
                                </div>
                            </dialog>
                        </div>

                        <div className=''>
                            <h3 className='text-3xl text-center text-blue-500 underline'>What To Submit</h3>
                            <div className='text-center'>
                                <p>{submissionInfo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;