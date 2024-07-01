import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
const baseUrl='http://127.0.0.1:8000/api/v1'
export const PopularTeachers = () => {

  const[teacher,setTeacher]=useState(null);
  useEffect(()=>{
    document.title='Popular Teachers'
    axios.get(baseUrl+'/teacher').then((response)=>{
      setTeacher(response.data)
      console.log(response.data);

    })
  },[])
 
  return (
    <div className='container mt-3'>
    <h3 className=' pb-1 mb-4'>Popular Teachers
        
      </h3>
     
      <div className='row mb-4'>
     <div className='col-md-3'>
     <div className="card ">
     <Link to='/detail/1'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to='/teacher-detail/1'>Teacher Name</Link>
          </h5>
     
      </div>
      <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          
          </div>
          
      </div>
    </div>
     </div>
     <div className='col-md-3'>
     <div className="card ">
     <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title">
          <a href='#'>Teacher Name</a>
          </h5>
     
      </div>
      <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
        
          </div>
          
      </div>
    </div>
     </div>
     <div className='col-md-3'>
     <div className="card ">
     <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title">
          <a href='#'>Teacher Name</a>
          </h5>
     
      </div>
      <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
         
          </div>
          
      </div>
    </div>
     </div>


     <div className='col-md-3 '>
     <div className="card ">
     <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
      <div className="card-body">
        <h5 className="card-title">
          <a href='#'>Teacher Name</a>
          </h5>
     
      </div>
      <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
         
          </div>
          
      </div>
    </div>
     </div>

     <div className='col-md-3 mt-3'>
     <div className="card ">
     <Link to='/detail/1'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to='/detail/1'>Teacher Name</Link>
          </h5>
     
      </div>
      <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          
          </div>
          
      </div>
    </div>
     </div> 
     <div className='col-md-3 mt-3'>
     <div className="card ">
     <Link to='/detail/1'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to='/detail/1'>Teacher Name</Link>
          </h5>
     
      </div>
      <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
        
          </div>
          
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
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
      </div>

  )
}
