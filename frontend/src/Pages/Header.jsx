import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')

  return (

    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/all-courses">Courses</Link>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Teacher
          </a>
          <ul className="dropdown-menu">
            {teacherLoginStatus!=='true' && 
            <>
            <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
            <li><Link className="dropdown-item" to="teacher-register">Register</Link></li>
            </>
            }
            <li><Link className="dropdown-item" to="/teacher-dashboard">Dash board</Link></li>
            <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
            
          </ul>
        </li>
       
          <Link className="nav-link" to="/about">About us</Link>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          USER
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
            <li><Link className="dropdown-item" to="user-register">Register</Link></li>
            <li><Link className="dropdown-item" to="/user-dashboard">Dash board</Link></li>
            <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
            
          </ul>
        </li>
          {/* <Link classNameName="nav-link disabled" aria-disabled="true">About us</Link> */}
        </div>
      </div>
    </div>
  </nav></div>
  )
}
