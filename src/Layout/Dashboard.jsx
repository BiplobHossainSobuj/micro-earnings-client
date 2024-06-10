import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import useTaskCreator from '../hooks/useTaskCreator';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { FaCoins } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([]);
    const [isAdmin] = useAdmin();
    const [isTaskCreator] = useTaskCreator();
    const { user, logout } = useAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/users/${user.email}`)
            .then(res => setUserInfo(res.data))
    }, [])
    const navOptions = <>

        {
            user && !isAdmin && !isTaskCreator && <>
                <li><NavLink to={'userHome'}>Home</NavLink></li>
                <li><NavLink to={'taskList'}>Task List</NavLink></li>
                <li><NavLink to={'mySubmissions'}>My Submission</NavLink></li>
                <li><NavLink to={'withdrawals'}>Withdrawals</NavLink></li>
            </>
        }
        {
            isAdmin && <>
                <li><NavLink to={'adminHome'}>Home</NavLink></li>
                <li><NavLink to={'manageUsers'}>manageUsers</NavLink></li>
                <li><NavLink to={'manageTasks'}>Manage Tasks</NavLink></li>
            </>
        }
        {
            isTaskCreator && <>
                <li><NavLink to={'taskCreatorHome'}>Home</NavLink></li>
                <li><NavLink to={'addNewTask'}>Add New Task</NavLink></li>
                <li><NavLink to={'myTask'}>My Tasks</NavLink></li>
                <li><NavLink to={'purchaseCoin'}>Purchase Coin</NavLink></li>
                <li><NavLink to={'purchaseHistory'}>Purchase History</NavLink></li>
            </>
        }
    </>
    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log out succesfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
    }
    return (
        <div>
            {/* headers  */}
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost text-xl">Micro Earning</a>
                </div>
                <div className="flex-none flex-row-reverse gap-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div className='flex gap-4'>
                            <div className='font-semibold'>
                                <p>{userInfo.name}</p>
                                <p>{userInfo.role}</p>
                            </div>
                            <div className="btn bg-green-500 font-semibold btn-circle avatar ">
                                <FaCoins></FaCoins>
                                <p>{userInfo.coin}</p>
                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar btn-outline">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={userInfo.photoUrl} />
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Home</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navOptions}
                    </ul>
                </div>
                <div className='h-full hidden md:block'>
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        {navOptions}
                    </ul>
                </div>
                <div className='flex-1'>
                    <div>
                        <Outlet></Outlet>
                    </div>
                    <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                        <aside className="items-center grid-flow-col">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                            <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                        </aside>
                        <nav className="md:place-self-center md:justify-self-end">
                            <div className="grid grid-flow-col gap-4">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </nav>
                    </footer>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;