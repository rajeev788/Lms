import React from 'react'
import { Link } from 'react-router-dom'
export const SidebarforTeacher = () => {
  return (
    <div className='card'>
    <h5 className='card-header'>dashboard</h5>
<div className='list-group-flush'>
    
    <Link  className='list-group-item list-group-item-action' to="/teacher-add-course">add course</Link>
    <Link  className='list-group-item list-group-item-action' to="/teacher-my-course">My coures</Link>
    <Link  className='list-group-item list-group-item-action' to="/teacher-my-users">My users</Link>
    <Link  className='list-group-item list-group-item-action' to="/teacher-profile-settings">Profile settings</Link>
    <Link  className='list-group-item list-group-item-action' to="/teacher-change-password">Change password</Link>
    <Link  className='list-group-item list-group-item-action text-danger' to="/user-login">Log out</Link>
</div>
</div>
  )
}
