
import React from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect} from 'react'

const baseURL='http://127.0.0.1:8000/api/v1';
export const DetailTeacher = () => {
  const[courseData,setCourseData]=useState([])

  const[TeacherData,setTeacherData]=useState([])
  const[skill,setSkils]=useState([])
  const {teacherId}=useParams();

  useEffect(()=>{

    document.title=' TEacher DEtail'
    try{
        axios.get(baseURL+'/teacher/'+teacherId).then((res)=>{
         
         setTeacherData(res.data) 
         setCourseData(res.data.teacher_courses) 
         setSkils(res.data.skill_list)
        

           

        })
    }catch(error){
        console.log(error)
    }

   

},[])



  return (
    <div className="card mb-3 mt-4" style={{maxWidth:'900px'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img style={{ height: '100px', width: '100px' }} src={courseData.featured_img} className="img-fluid rounded-start" alt={courseData.title}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{TeacherData.full_name} </h5>
          
          <p> <b/>Skills: 
          {skill.map((skill,index)=>
        <>
        <Link to={`'/category/'${skill.trim()}`} className='btn-warning' > {skill}</Link>
        </>
      )}
          </p>

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
      {courseData.map((course,index)=>
        <Link to={'/detail/'+course.id} className='list-group-item list-group-item-action'>{course.title}</Link>
      )}
       
    </div>
  </div>
    </div>
  
    
  </div>
  
  )
}
