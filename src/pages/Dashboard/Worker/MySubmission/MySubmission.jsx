import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MySubmission = () => {
    const [submissions, setSubmissions] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/submissions/${user.email}`)
            .then(res => {
                setSubmissions(res.data);
            })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Creator Info</th>
                        <th>Task Info</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        submissions.map((task,index)=>
                            <tr key={task._id}>
                            <td>{index+1}</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{task.creatorName}</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>{task.status}</td>
                        
                    </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MySubmission;