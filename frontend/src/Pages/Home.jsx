import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Allcourses } from './AllCourses/Allcourses'
export const Home = () => {
  useEffect(()=>{
    document.title='Home Page'
  })
  return (
    <div className='containe mt-4'>
      
       {/* latest courser*/}
      <h3 className=' pb-1 mb-4'>latest courses
        <Link to="/all-courses" className='float-end'>See all</Link>
      </h3>
     
      <div className='row'>
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
      </div>
       {/* latest courser*/}

        {/* Feature courser*/}
      <h3 className=' pb-1 my-2'>Popular courses <a href="#" className='float-end'>See all</a></h3>
     
     <div className='row'>
    <div className='col-md-3'>
    <div className="card ">
    <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
     <div className="card-body">
       <h5 className="card-title">
         <a href='#'>Course title</a>
         </h5>
    
     </div>
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
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
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
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
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
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
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
      </div>
   </div>
    </div>
     </div>
      {/* feature courser*/}

      {/* popular teachers*/}
      <h3 className=' pb-1 my-2'>Popular teachers <Link to="popular-teachers" className='float-end'>See all</Link></h3>
     
     <div className='row'>
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
     </div>
      {/* popular teahers*/}
     {/* student testimonials*/}
     <h3 className=' pb-1 my-2'>student testimonials <a href="#" className='float-end'>See all</a></h3>
     
     <div className='row'>
    <div className='col-md-3'>
    <div className="card ">
    <a href='#'> <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" className="card-img-top" alt="..."/></a>
     <div className="card-body">
       <h5 className="card-title">
         <a href='#'>Course title</a>
         </h5>
    
     </div>
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
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
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
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
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
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
     <div className='card-footer'>
        <div className='title'>
          <span>Rating :4/5</span>
          <span className='float-end'>views :777</span>
          </div>
          
      </div>
   </div>
    </div>
     </div>
      {/* student courser*/}

      <div id="carouselExampleDark" className="carousel carousel-dark slide bg-dark text-white py-5 ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    )
}
