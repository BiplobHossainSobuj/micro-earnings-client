import React from 'react';

const ViewDetails = ({task}) => {
    const {taskImageUrl,payableAmount,taskTitle,taskQuantity,creatorName,submissionInfo,taskDetails} = task;
    return (
        <div className="hero min-h-screen my-10 w-full">
                <div className="hero-content flex-col">
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
    );
};

export default ViewDetails;