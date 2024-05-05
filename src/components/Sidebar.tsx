/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, NavLink } from 'react-router-dom';
import userThumb from './../assets/img/user.jpg';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export default function Sidebar({isOpen}:any) {
  const {user,role} = useContext(AuthContext)

 
  const userRoutes=[
    {
      link:'/',
      title:'Dashboard'
    },
    {
      link:'/websites',
      title:'Websites'
    }
  ]

  const adminRoutes = [
    ...userRoutes,
    {
      link:'/users',
      title:'users'
    },
    {
      link:'/create-user',
      title:'Manage User'
    },
    {
      link:'/hide-elements',
      title:'Hide Elements'
    }
  ]

  let routes:any=[]

  if(user.role === 'admin'){
    routes = adminRoutes
  }else{
    routes= userRoutes
  }

  return (
<div className={`sidebar pe-4 pb-3 ${isOpen ? 'open' : ''}`}>
  <nav className="navbar bg-secondary navbar-dark">
    <Link to="/" className="navbar-brand mx-4 mb-3">
      <h3 className="text-primary">Dashboard</h3>
    </Link>
    <div className="d-flex align-items-center ms-4 mb-4">
      <div className="position-relative">
        <img className="rounded-circle" src={userThumb} alt='' style={{width: 40, height: 40}} />
        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
      </div>
      <div className="ms-3">
        <h6 className="mb-0">{user?.name}</h6>
        <span>{role}</span>
      </div>
    </div>
    <div className="navbar-nav w-100">
    {
      routes?.map(({title,link}:any)=>(
        <NavLink key={title} to={link}         
        className={({ isActive }:any) => isActive ? "nav-item nav-link active": "nav-item nav-link"}><i className="fa fa-tachometer-alt me-2" />{title}</NavLink>
      ))
    }



      <Link to="/support" className="nav-item nav-link  mt-2"><i className="fa fa-tachometer-alt me-2" />Support</Link>



    </div>
  </nav>
</div>

  )
}
