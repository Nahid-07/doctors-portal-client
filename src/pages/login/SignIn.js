import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../Context/FirebaseContext";
import { InfinitySpin } from "react-loader-spinner";
import { useState } from "react";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [error,setError] = useState('')
  const {login,gooogleLogin,loader} = useContext(authProvider)
  const navigate = useNavigate()
  const onSubmit = (data) => {
    login(data.email,data.password)
    .then(() => {
      if(loader){
        return <InfinitySpin 
        width='200'
        color="#4fa94d"
      />
      }
      navigate('/')
    })
    .catch(err => setError(err.message))
    setError('')
  }
  const handleGoogleLoginIn = ()=>{
    gooogleLogin()
    .then(()=>{
      navigate('/')
    })
    .catch(err => setError(err.message))
  }
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center">
      <form className="w-96 my-28" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-medium text-center">Login</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           {...register("email", { required: true})}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="****"
            className="input input-bordered w-full"
            {...register("password", { required: true})}
          />
        </div>
        <p className="text-red-600">{error}</p>
        <div className="mt-5">
            <button type="submit" className="btn  bg-[#293462] w-full">Login</button>
        </div>
        <p className="mt-2">New to dorctor portal ? <Link to='/signup'>Sign Up</Link></p>
        <div className="divider">OR</div>
        <div className="mt-5">
            <button onClick={(handleGoogleLoginIn)} type="submit" className="btn btn-outline hover:bg-[#293462] w-full">Google Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
