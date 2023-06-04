import { Link, useNavigate } from 'react-router-dom';
import authImg from '../../assets/others/authImg.png'
import Social from '../Shared/Social/Social';
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';


const Login = () => {
    const navigate = useNavigate()
    const { logIn } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        logIn(data?.email, data?.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate('/', { replace: true })
        })
    }
    return (
        <section className={`min-h-screen bg-[url('/AuthBG.png')]`}>
            <div className="container">
                <div className="hero py-10 min-h-screen items-center">
                    <div className="hero-content flex-col lg:flex-row shadow-2xl">
                        <div className="text-center lg:text-left">
                            <img src={authImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <h1 className="text-center font-bold text-2xl">
                                LOG-IN
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="LogIn" className="btn btn-primary" />
                                </div>
                            </form>
                            <p className='text-primary text-center'>
                                New here? <Link to= '/loginRegister/register' className='text-secondary'>Create a new account.</Link>
                            </p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;