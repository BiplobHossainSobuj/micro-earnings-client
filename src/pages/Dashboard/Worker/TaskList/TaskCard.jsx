import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TaskCard = ({task}) => {
    const {taskTitle,taskImageUrl,_id,creatorName,completionDate,payableAmount,taskQuantity} = task;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={taskImageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex'>
                <h2 className="card-title">{taskTitle}</h2>
                <div className="badge badge-primary badge-outline"><FaCoins></FaCoins> {payableAmount}</div>
                </div>
                <p>Creator: {creatorName}</p>
                <p>Completion Date: {completionDate}</p>
                <p>Quantity:{taskQuantity}</p>
                <div className="card-actions justify-end">
                    <Link state={task} to={`/dashboard/taskList/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;