import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({task}) => {
    const {taskTitle,taskImageUrl,_id} = task;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={taskImageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{taskTitle}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link state={task} to={`/dashboard/taskList/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;