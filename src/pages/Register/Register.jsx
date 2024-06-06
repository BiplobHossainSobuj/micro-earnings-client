
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
const imgHostingKey = import.meta.env.VITE_image_hosting_key;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image: data.photo[0] };
        const res = await axiosPublic.post(imgHostingApi, imgFile, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const image = res.data.data.display_url;
        if (res.data.success) {
            const user = {
                name: data.name,
                email: data.email,
                role: data.role,
                photoUrl: image,
            };
            console.log(user, 'user');
            createUser(data.email, data.password)
                .then(async () => {
                    updateUserProfile(user.name, user.photoUrl);
                    const userRes = await axiosPublic.post('/users', user);
                    if (userRes.data.insertedId) {
                        navigate('/dashboard')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your registration succesfull",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input {...register("firstName", { required: true })} /> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("name", { required: true })} type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
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
                        <span className="label-text">Role</span>
                    </label>
                    <select className="select select-bordered" {...register("role")}>
                        <option value="worker">Worker</option>
                        <option value="taskCreator">Task Creator</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input {...register("password", { required: true })} type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upload Your Photo</span>
                    </label>
                    <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className="btn btn-block btn-primary" value={'Register'} type="submit" />
            </form>
        </div>
    );
};

export default Register;