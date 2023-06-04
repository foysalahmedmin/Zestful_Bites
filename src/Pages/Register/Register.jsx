import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import authImg from '../../assets/others/authImg.png'
import Social from '../Shared/Social/Social';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const navigate = useNavigate()
    const { createAccount, updateProfile_name_url } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createAccount(data?.email, data?.password)
        .then(result => {
            const createdUser = result.user
            reset()
            navigate('/', { replace: true })
            userProfileUpdate(createdUser, data.name, data.photoUrl)
        })
    }
    const userProfileUpdate = (user, name, image_url) => {
        updateProfile_name_url(user, name, image_url)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <section className={`min-h-screen bg-[url('/AuthBG.png')]`}>
            <div className="container">
                <div className="hero py-10 min-h-screen items-center">
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">
                        <div className="text-center lg:text-left">
                            <img src={authImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <h1 className="text-center font-bold text-2xl">
                                REGISTER
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" {...register("photoUrl", { required: true })} placeholder="Photo Url" name="photoUrl" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                        minLength: 6,
                                        maxLength: 8
                                    })} placeholder="password" name="password" className="input input-bordered" required />
                                    {errors.password && <span>This field is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className="btn btn-primary" />
                                </div>
                            </form>
                            <p className='text-primary text-center'>
                                Already registered? <Link to='/loginRegister/login' className='text-secondary'>Go to Login.</Link>
                            </p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;