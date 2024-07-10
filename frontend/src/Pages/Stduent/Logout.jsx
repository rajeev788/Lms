import React from 'react'
import { Link } from 'react-router-dom'

export const Studetlogout = () => {
  localStorage.removeItem('studentLoginStatus')

    window.location.href='/user-login'

  return (
    <div>
      


    </div>
  )
}
