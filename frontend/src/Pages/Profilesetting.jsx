import React from 'react'
import { Sidebar } from './Sidebar'
export const Profilesetting = () => {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
       <Sidebar/>
        </aside>
        <section className='col-md-9 '>
        <div className='card'>
            <h5 className='card-header'>profile setting</h5>
            <div className='card-body'>

            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Full name</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control" id="staticEmail" />
                </div>
            </div>
            
                
        <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control" id="staticEmail" value="email@example.com"/>
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
