import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAdmin from "../../hooks/useAdmin";
import useTaskCreator from "../../hooks/useTaskCreator";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {login} = useAuth();
    const axiosPublic= useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isTaskCreator] = useTaskCreator();
    const from = location.state?.from?.pathname || '/'
    const onSubmit = async (data) => {
        console.log(data,'from login');
        login(data.email,data.password)
        .then(result=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Log in succesfull",
                showConfirmButton: false,
                timer: 1500
              });
              const user = {email:result.user.email}
              axiosPublic.post('/jwt', user)
                    .then(res => {
                        console.log(res.data);
                        navigate('/dashboard');
                    })
            // navigate(from,{replace:true})
            // navigate('/dashboard/userHome');
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("email", { required: true })} type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("password", { required: true })} type="password" className="grow" placeholder="Email" />
                    </label>
                </div>
                <input className="btn btn-block btn-primary" value={'Login'} type="submit" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;