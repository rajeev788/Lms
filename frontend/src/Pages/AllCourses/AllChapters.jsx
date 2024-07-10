import React from 'react'

import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { SidebarforTeacher } from '../Teacher/SidebarforTeacher'
const baseURL='http://127.0.0.1:8000/api/v1';
import { useParams } from 'react-router-dom'

export const AllChapters = () => {
  const [chapterData,setChapterData]=useState([])
  const [totalresult,setTotalresult]=useState(0)


  const {courseId}=useParams()

   useEffect(()=>{

       document.title='Teacher course'
       try{
           axios.get(baseURL+'/course-chapter/'+courseId).then((res)=>{
            setTotalresult(res.data.length)   
            setChapterData(res.data) 
              

           })
       }catch(error){
           console.log(error)
       }

      

   },[])


   

    const handleDelete=()=>{

      Swal.fire({
        title:'confrim',
        text:"are you sure you want to delete",
        icon:"info",
        confirmButtonText:"continue",
        cancelButton:true

    })

   }

  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3 '>
        <SidebarforTeacher/>
        </aside>
        <section className='col-md-9'>
        <div className='card mt-4'>
                    <h5 className='card-header'>All chapterts({totalresult})</h5>
                    <div className='card-body'>
                    <table className='table table-bordered'>
                            <thead ><tr>
                                <th>tile</th>
                                <th>video</th>
                                <th>remarks </th>
                                <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chapterData.map((chapter,index)=>

                                <tr key={index}>
                                <td><Link to={'/teacher-edit-chapter/'+chapter.id}>{chapter.title}</Link></td>
                                {/* <td><img src={course.featured_img}  width='80' className='rounded'alt={course.featured_img} /></td> */}
                                <td>
                                  <video controls width='250'>
                                    <source src={chapter.video.url}
                                    type="video/webm"/>
                                    <source src={chapter.video.url}
                                    type="video/mp4"/>

                                  </video>
                                </td>
                                <td>{chapter.remarks}</td>
                                <td>
                                  
                                    {/* <Link to={'/delete-chapter/'+chapter.id}<i class="bi bi-pencil-square"></i></Link> */}
                                    <Link to={'/teacher-edit-chapter/'+chapter.id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                    </Link>
                                    <button onClick={handleDelete} className='btn btn-sm btn-danger ml-1' > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill ml-4" viewBox="0 0 16 16">
                                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                    </svg>
                                    </button>
                                
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
