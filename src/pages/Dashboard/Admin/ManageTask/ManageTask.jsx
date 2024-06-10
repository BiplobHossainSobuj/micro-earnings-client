import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import ViewDetails from './ViewDetails';

const ManageTask = () => {
    const [taskDetails, setTaskDetails] = useState([]);
    const [taskID, setTaskID] = useState('');
    const axiosSecure = useAxiosSecure();
    const { data: allTasks = [], refetch } = useQuery({
        queryKey: ['allTasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/tasks');
            return res.data;
        }
    })
    const handleClick = async (task) => {
        // setTaskID(id);
        // const res = await axiosSecure.get(`/admin/manageTaks/${id}`);
        // setTaskDetails(res.data);
        document.getElementById('my_modal_1').showModal();
    }
    const handleViewDetails = (task) => {
        setTaskDetails(task);
        document.getElementById('my_modal_1').showModal();
    }
    const handleDeleteTask = (task) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/admin/tasks/${task._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>Creator Name</th>
                            <th>Task Quantity</th>
                            <th>Coin Needed</th>
                            <th>Availability</th>
                            <th>View Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTasks.map((task, index) => <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.taskTitle}</td>
                                <td>{task.creatorName}</td>
                                <td>{task.taskQuantity}</td>
                                <td>{task.payableAmount}</td>
                                <td>{task.completionDate}</td>
                                <td>
                                    <button onClick={() => handleViewDetails(task)} className="btn btn-lg bg-red-500">
                                        <FaEdit></FaEdit>
                                    </button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <ViewDetails task={taskDetails}></ViewDetails>
                                        </div>
                                    </dialog>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteTask(task)} className="btn btn-lg bg-red-500">
                                        <FaTrash className="text-2xl"></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTask;