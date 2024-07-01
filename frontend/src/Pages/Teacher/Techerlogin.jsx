import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { useEffect,useState } from 'react'
import axios from 'axios'
const baseUrl='http://127.0.0.1:8000/api/v1'
export const Techerlogin = () => {
const[teacherLoginData,setTeacherLoginData]=useState({
  'email':"",
  "password":""
})

const [error,setError]=useState('')

const handleChange=(e)=>{
  setTeacherLoginData({
    ...teacherLoginData,
    [e.target.name]:e.target.value
  });
}

const submitForm=(e)=>{
  e.preventDefault();
 const teacherFormData=new FormData;
 teacherFormData.append('email',teacherLoginData.email)
 teacherFormData.append('password',teacherLoginData.password)
try{
  axios.post(baseUrl+'/teacher-login',teacherFormData)
  .then((res)=>{
    if (res.data.bool==true){
      localStorage.setItem('teacherLoginStatus','true')
      localStorage.setItem('teacherId',res.data.teacher_id)
      window.location.href='/teacher-dashboard'
    }else{
      setError('invalid email or password')
    }
  }).catch((error) => {
    if (error.response && error.response.status === 400) {
      setError(error.response.data.error || 'Invalid email or password');
  } else {
      setError('An unexpected error occurred');
  }
  console.error('Error:', error);
  });

}catch(error){
  console.log(error);
}
}

const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if (teacherLoginStatus=='true'){
  window.location.href='/teacher-dashboard'
}


  useEffect(()=>{
    document.title='Teacher login'
  })

  
  return (
    <div className="container" style={{ padding: '20px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={submitForm}>
            <h2 className="mb-4">Login</h2>
            {error &&<p className='text-danger'>{error}</p> }
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={teacherLoginData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={teacherLoginData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
