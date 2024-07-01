import React from 'react'
import { SidebarforTeacher } from './SidebarforTeacher'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
const baseURL='http://127.0.0.1:8000/api/v1';
export const MYTeachercourse = () => {

    const [courseData,setCourseData]=useState([])


   const teacherId= localStorage.getItem('teacherId')

    useEffect(()=>{

        document.title='Teacher course'
        try{
            axios.get(baseURL+'/teacher-courses/'+teacherId).then((res)=>{
               setCourseData(res.data) 

            })
        }catch(error){
            console.log(error)
        }

       

    },[])

  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3 '>
        <SidebarforTeacher/>
        </aside>
        <section className='col-md-9'>
        <div className='card mt-4'>
                    <h5 className='card-header'>My courses</h5>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead ><tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>created by</th>
                                <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((course,index)=>

                                <tr key={index}>
                                <td><Link to={'/teacher-all-chapter/'+course.id}>{course.title}</Link></td>
                                <td><img src={course.featured_img}  width='80' className='rounded'alt={course.featured_img} /></td>
                                <td><Link to=''> created</Link></td>
                                <td>
                                    <button className='btn btn-danger btn-sm  '> DELETE</button>
                                    <Link className='btn btn-success btn-sm ml-3 mt-2' to={'/teacher-add-chapter/'+course.id}>Add chapter</Link>
                                </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                </section>
    </div>
    </div>
  )
}
