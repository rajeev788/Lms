import React from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  return (
    
             <div className='card'>
                    <h5 className='card-header'>dashboard</h5>
                <div className='list-group-flush'>
                    <Link  className='list-group-item list-group-item-action' to="/my-courses">My courses</Link>
                    <Link  className='list-group-item list-group-item-action' to="/favorite-courses">Favorite Courses</Link>
                    <Link  className='list-group-item list-group-item-action' to="/recommended-courses">Recommended coures</Link>
                    <Link  className='list-group-item list-group-item-action' to="/profile-settings">Profile settings</Link>
                    <Link  className='list-group-item list-group-item-action' to="/change-password">Change password</Link>
                    <Link  className='list-group-item list-group-item-action text-danger' to="/user-login">Log out</Link>
                </div>
                </div>
    
  )
}
