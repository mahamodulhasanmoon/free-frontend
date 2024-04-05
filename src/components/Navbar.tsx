/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import userThumb from './../assets/img/user.jpg'
import { AuthContext } from '../contexts/AuthProvider'
export default function Navbar({setIsOpen}:any) {
  const {logOut} = useContext<any>(AuthContext)
  return (
    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
  <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
    <h2 className="text-primary mb-0"><i className="fa fa-user-edit" /></h2>
  </a>
  <p onClick={()=>setIsOpen((state:boolean) => !state)} className="sidebar-toggler flex-shrink-0">
    <i className="fa fa-bars" />
  </p>
  <form className="d-none d-md-flex ms-4">
    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
  </form>
  <div className="navbar-nav align-items-center ms-auto">
   

    <div className="nav-item dropdown">
      <p className="nav-link dropdown-toggle cursor-pointer" data-bs-toggle="dropdown">
        <img className="rounded-circle me-lg-2" src={userThumb} alt='' style={{width: 40, height: 40}} />
        <span onClick={(e)=>logOut(e)} className="d-none d-lg-inline-flex">Logout</span>
      </p>

    </div>
  </div>
</nav>

  )
}
