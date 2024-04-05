import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {   useNavigate } from "react-router-dom";
import { postData } from "../../api/fetching";

export default function Register() {
  const { handleSubmit, register } = useForm<any>();
  const navigate = useNavigate()
  const onSubmit = async (data:any) => {
      try {
        const response = await postData("auth/signup", data)
        toast.success((response as any).message)
        navigate('/login')
      } catch (error) {
        console.log((error as any).message)
      }
  
  
    }

  return (
<div className="container-fluid">
  <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
    <div className=" col-md-8 ">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
        <div className="d-flex align-items-center justify-content-center mb-3">

          <h3>Create new User</h3>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingText" placeholder="jhondoe"    {...register('name')}/>
          <label htmlFor="floatingText">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  {...register('email')}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"   {...register('password')}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
        {/* <p className="text-center mb-0">Already have an Account? <Link to='/login'>Sign In</Link></p> */}
      </div>
    </form>
    </div>
  </div>
</div>

  )
}
