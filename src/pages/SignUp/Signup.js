import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from '../../Context/FirebaseContext';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const {SignUp,gooogleLogin} = useContext(authProvider)

    const navigate = useNavigate()

    const handleSignUp = data =>{
      SignUp(data.email,data.password)
      .then(result => {
        const user = result.user
        console.log(user);
        navigate('/')
      }).catch(err => console.log(err.message))
    }
    const handleGoogleLoginIn = ()=>{
      gooogleLogin()
      .then((result)=>{
        const user = result.user;
        console.log(user);
        navigate('/')
      })
      .catch(err => console.log(err))
    }
    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <form className="w-96 my-28" onSubmit={handleSubmit(handleSignUp)}>
          <h1 className="text-3xl font-medium text-center">Sign Up</h1>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your full name</span>
              </label>
              <input
               {...register("fullName", { required: true})}
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               {...register("email", { required: true})}
                type="text"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register("password", { required: true})}
              />
            </div>
            <div className="mt-5">
                <button type="submit" className="btn  bg-[#293462] w-full">Sign Up</button>
            </div>
            <p className='mt-2'>Already have an account ? <Link to='/login'>Log in</Link></p>
            <div className="divider">OR</div>
            <div className="mt-5">
                <button onClick={handleGoogleLoginIn} type="submit" className="btn btn-outline hover:bg-[#293462] w-full">Google Sign In</button>
            </div>
          </form>
        </div>
      );
};

export default Signup;