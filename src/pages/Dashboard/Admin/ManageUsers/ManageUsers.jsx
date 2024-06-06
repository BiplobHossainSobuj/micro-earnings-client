import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';


const ManageUsers = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const [userRole,setUserRole] = useState('');
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
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
    const handleRole = (e) => {
        const role = e.target.value;
        setUserRole(role);
        console.log(role)
    }
    const handleChange = async (data) => {
        setUserRole(data.target.value);
    }
    const handleUpdateRole = async(id)=>{
        const updatedInfo = {id,userRole}
        console.log(userRole);
        const res = await axiosSecure.patch(`users/role/${id}`,updatedInfo);
        console.log(res.data);
    }

    return (
        <div>
            <div>
                <h2 className="text-4xl">All users</h2>
                <h2 className="text-4xl">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Emial</th>
                            <th>Photo</th>
                            <th>Coin</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.photoUrl}</td>
                                <td>{user.coin}</td>
                                <td>
                                    <select name='role' onBlur={()=>handleUpdateRole(user._id)} onChange={handleChange}defaultValue={'default'}
                                    >
                                        <option value="worker">Worker</option>
                                        <option value="taskCreator">Task Creator</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-lg bg-red-500">
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

export default ManageUsers;