import React from 'react'
import { Link } from 'react-router-dom'
export const Categorycourses = () => {
  return (
    <div className='container mt-3'>
    <h3 className=' pb-1 mb-4'>web devlopment courses
        
      </h3>
     
      <div className='row mb-4'>
     <div className='col-md-3'>
     <div className="card ">
     <Link to='/detail/1'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to='/detail/1'>Course title</Link>
          </h5>
     
      </div>
    </div>
     </div>
     <div className='col-md-3'>
     <div className="card ">
     <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title">
          <a href='#'>Course title</a>
          </h5>
     
      </div>
    </div>
     </div>
     <div className='col-md-3'>
     <div className="card ">
     <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title">
          <a href='#'>Course title</a>
          </h5>
     
      </div>
    </div>
     </div>


     <div className='col-md-3 '>
     <div className="card ">
     <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title">
          <a href='#'>Course title</a>
          </h5>
     
      </div>
    </div>
     </div>

     <div className='col-md-3 mt-3'>
     <div className="card ">
     <Link to='/detail/1'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to='/detail/1'>Course title</Link>
          </h5>
     
      </div>
    </div>
     </div> 
     <div className='col-md-3 mt-3'>
     <div className="card ">
     <Link to='/detail/1'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to='/detail/1'>Course title</Link>
          </h5>
     
      </div>
    </div>
     </div> 
     
      </div>
      {/* //   pagination?? */}
      <nav aria-label="Page navigation example mt-5">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
      </div>

  )
}
