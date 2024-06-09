import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const axiosPublic= useAxiosPublic();
    const {loginWithGoogle} = useAuth();
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(res=>{
            const user = {
                name: res.user.displayName,
                email: res.user.email,
                role: 'worker',
                photoUrl: res.user.photoURL,
                coin:10
            };
            axiosPublic.post('/users',user)
            .then(res=>console.log(res.data))
            console.log(res.user);
            navigate('/dashboard/userHome');

        })
    }
    return (
        <div className='mx-auto p-4'>
            <button onClick={handleGoogleLogin} className="btn btn-outline">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;