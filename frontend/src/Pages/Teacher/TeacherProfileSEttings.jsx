import React from 'react'
import { SidebarforTeacher } from './SidebarforTeacher'
import { Link } from 'react-router-dom'
export const TeacherProfileSEttings = () => {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
     <SidebarforTeacher/>
        </aside>
        <section className='col-md-9 '>
        <div className='card'>
            <h5 className='card-header'>profile setting</h5>
            <div className='card-body'>

            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Full name</label>
                <div className="col-sm-10">
                <input type="text" readonly className="form-control" id="staticEmail" />
                </div>
            </div>
            
                
        <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="text" readonly className="form-control" id="staticEmail" value="email@example.com"/>
                </div>
            </div>
                
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Profile Photo</label>
                <div className="col-sm-10">
                <input type="file" className="form-control" id="inputPassword"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Interest</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword"/>
                </div>
            </div>

                <div >
                <button className='btn btn-primary'>Update</button>
                
                </div>
        </div>
        </div>
</section>
</div>
</div>
  )
}
