import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const MyTask = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks/${user.email}`);
            return res.data;
        }
    })
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
                axiosSecure.delete(`/tasks/${task._id}`)
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
    
    const handleUpdate = async (id,e) => {
        e.preventDefault();
        const taskDetails = e.target.taskDetails.value;
        const taskTitle = e.target.taskTitle.value;
        const submissionDetails = e.target.submissionDetails.value;
        const updatedInfo = { id, taskDetails, taskTitle,submissionDetails }
        console.log(updatedInfo);
        const res = await axiosSecure.patch(`tasks/${id}`,updatedInfo);
        console.log(res.data);
    }
    return (
        <div>
            my tasks:{tasks.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Task Count</th>
                            <th>Task Title</th>
                            <th>Payable Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.taskTitle}</td>
                                <td>{task.payableAmount}</td>
                                <td>
                                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-lg bg-red-500">
                                        <FaEdit></FaEdit>
                                    </button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <form onSubmit={()=>handleUpdate(task._id,event)}>
                                                <label className="form-control w-full max-w-xs">
                                                    <span className="label-text">Task Title</span>
                                                    <input name="taskTitle" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                                </label>
                                                <label className="form-control w-full max-w-xs">
                                                    <span className="label-text">Task Details</span>
                                                    <textarea name="taskDetails" className="textarea textarea-bordered h-24" placeholder="Task Details"></textarea>
                                                </label>
                                                <label className="form-control w-full max-w-xs">
                                                    <span className="label-text">Task Details</span>
                                                    <textarea name="submissionDetails" className="textarea textarea-bordered h-24" placeholder="Submission Details"></textarea>
                                                </label>
                                                <div className="modal-action">
                                                    <input className="btn" type="submit" value={'Update'} />
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
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

export default MyTask;