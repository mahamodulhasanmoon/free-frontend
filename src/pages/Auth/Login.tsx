import { Link, useLocation, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextProps } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

export default function Login() {
  const [loading,setLoading]= useState(false)
  const {handleLogin,user}:AuthContextProps = useContext(AuthContext)
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate()

  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  useEffect(()=>{
    if (user) {
      return navigate(from, { replace: true });
     }
 
  },[user,from,navigate])

const onSubmit = async (data:any) => {
  try {
    setLoading(true)
      await handleLogin?.(data)
      setLoading(false)
    return navigate(from, { replace: true });
  } catch (error:any) {
    setLoading(false)
    toast.error(error.response.data.error || error.response.data.message || 'something Went Wrong');
  }

  
};

  return (
<div className="container-fluid">
  <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
      <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
        <div className="d-flex align-items-center justify-content-center mb-3">

          <h3>Sign In</h3>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email')}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register('password')} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <Link to=''>Forgot Password</Link>
        </div>
        <button type="submit" className="btn btn-primary py-3 w-100 mb-4">{loading ? 'Please wait' : 'Login'}</button>
        <p className="text-center mb-0">Don't have an Account? <Link to='/register'>Sign Up</Link></p>
      </div>
      </form>
    </div>
  </div>
</div>

  )
}
