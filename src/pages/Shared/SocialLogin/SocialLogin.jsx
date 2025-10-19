import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { loginWithGoogle, loginWithFacebook } = useAuth();
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                const user = {
                    name: res.user.displayName,
                    email: res.user.email,
                    role: 'worker',
                    photoUrl: res.user.photoURL,
                    coin: 10
                };
                axiosPublic.post('/users', user)
                    .then(res => console.log(res.data))
                console.log(res.user);
                navigate('/dashboard/userHome');

            })
    }
    // const getPagees = (token) => {
    //     fetch(`https://graph.facebook.com/me/accounts?access_token=${token}`)
    //         .then(res => res.json())
    //         .then(data => console.log("User Pages:", data));
    // }
    // const handleFacebookLogin = () => {
    //     loginWithFacebook()
    //         .then(res => {
    //             const user = {
    //                 name: res.user.displayName,
    //                 email: res.user.email,
    //                 role: 'worker',
    //                 photoUrl: res.user.photoURL,
    //                 coin:10
    //             };
    //             // console.log("Facebook User:", user);
    //             axiosPublic.post('/users',user)
    //             .then(res=>console.log(res.data))
    //             console.log(res.user);
    //             navigate('/dashboard/userHome');

    //         })
    // }

    return (
        <div className='mx-auto p-4 space-x-4'>
            <button onClick={handleGoogleLogin} className="btn btn-outline">
                <FaGoogle></FaGoogle>
                Google
            </button>
            {/* <button onClick={handleFacebookLogin} className="btn btn-outline">
                <FaFacebook></FaFacebook>
                Facebook
            </button> */}
        </div>
    );
};

export default SocialLogin;