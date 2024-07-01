import React from 'react'
import { Link } from 'react-router-dom'

import { SidebarforTeacher } from './SidebarforTeacher'
export const TeacherDashboard = () => {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
           <SidebarforTeacher/>
            </aside>
            <section className='col-md-9 '>
             Dashboard
            </section>
        </div>
    </div>
  )
}
