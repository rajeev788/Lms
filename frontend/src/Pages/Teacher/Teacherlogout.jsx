import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
export const Teacherlogout = () => {
  localStorage.removeItem('teacherLoginStatus')

    window.location.href='/teacher-login'

  return (
    <div>
      


    </div>
  )
}
