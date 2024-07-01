import React from 'react'
import { Link } from 'react-router-dom'
export const DetailTeacher = () => {
  return (
    <div className="card mb-3 mt-4" style={{maxWidth:'900px'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://imgs.search.brave.com/MZcVw_uqMRXrrCdbi3wOUlSNxfZBENpSMzqYwLyE28c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw" className="img-fluid rounded-start" alt="Teacher-img"/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Harry </h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p> <b/>Skills: <Link to="/category/python">python</Link></p>
          <p> <b/>Skills: <Link to="/category/java">java</Link></p>
          <p> <b/>Skills: <Link to="/category/rust">rust</Link></p>
          <p> <b/>Recent course: <Link to="/teacher-detail/1">python course</Link> </p>
        
          <p><b/>Rating:4/5</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    {/* course videos */}
    <div className='card'>
    <div className="card" style={{width:"33.5srem"}}>
    <div className="card-header">
      Course list
    </div>
    <div className='list-group list-group-flush'>
       <Link to='/detail/1' className='list-group-item list-group-item-action'>php course 1 </Link>
       <Link to='/detail/1' className='list-group-item list-group-item-action'>php course 1 </Link>
       <Link to='/detail/1' className='list-group-item list-group-item-action'>php course 1 </Link>
    </div>
  </div>
    </div>
  
    
  </div>
  
  )
}
