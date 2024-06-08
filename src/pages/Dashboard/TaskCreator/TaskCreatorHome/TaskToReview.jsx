import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";


const TaskToReview = () => {
    const [submissionDetails,setSubmissionDetails] = useState('');
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: submissions = [], refetch } = useQuery({
        queryKey: ['submissions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/submissions/taskCreator/${user.email}`);
            return res.data;
        }
    })
    const handleGetSubmission = async(id)=>{
        const res =await axiosSecure.get(`/submissions/details/${id}`);
        setSubmissionDetails(res.data[0].submitDetails);
    }
    const handleApprove =async(task)=>{
        const id = task._id;
        const workerEmail = task.workerEmail;
        console.log(id,workerEmail);
        const res =await axiosSecure.patch(`/submissions/approve/${id}`);
        console.log(res.data);
        refetch();
    }
    const handleReject =async(task)=>{
        const id = task._id;
        const workerEmail = task.workerEmail;
        console.log(id,workerEmail);
        const res =await axiosSecure.patch(`/submissions/reject/${id}`);
        console.log(res.data);
        refetch();
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Worker Info</th>
                        <th>Task Info</th>
                        <th>Payable Amount</th>
                        <th>Submissions</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        submissions.map((task, index) =>
                            <tr key={task._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{task.workerName}</div>
                                            <div className="text-sm opacity-50">{task.workerEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {task.taskTitle}
                                </td>
                                <td>{task.payableAmount}</td>
                                <td>
                                    <button className="btn btn-outline" onClick={() =>{
                                        document.getElementById('my_modal_5').showModal();
                                        handleGetSubmission(task._id)
                                    } }>View Submission</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg"> Please Check!!</h3>
                                            <p className="py-4">{submissionDetails}</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                                <td>{task.status}</td>
                                <td>
                                    <button onClick={()=>handleApprove(task)} className="btn btn-md bg-red-500">
                                        Approve
                                    </button>
                                    <button onClick={()=>handleReject(task)} className="btn btn-md bg-red-500">
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default TaskToReview;