import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/v1';

export const Login = () => {
  const [studentLoginData, setStudentLoginData] = useState({
    email: "",
    password: ""
  });
  
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setStudentLoginData({
      ...studentLoginData,
      [e.target.name]: e.target.value
    });
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    const studentFormData = new FormData();
    studentFormData.append('email', studentLoginData.email);
    studentFormData.append('password', studentLoginData.password);
    
    try {
      axios.post(baseUrl + '/student-login', studentFormData)
        .then((res) => {
          if (res.data.bool === true) {
            localStorage.setItem('studentLoginStatus', 'true');
            localStorage.setItem('studentId', res.data.student_id);
            window.location.href = '/student-dashboard';
          } else {
            setError('Invalid email or password');
          }
        }).catch((error) => {
          if (error.response && error.response.status === 400) {
            setError(error.response.data.error || 'Invalid email or password');
          } else {
            setError('An unexpected error occurred');
          }
          console.error('Error:', error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  
const studentLoginStatus=localStorage.getItem('studentLoginStatus')
if (studentLoginStatus=='true'){
  window.location.href='/student-dashboard'
}
  
  useEffect(() => {
    document.title = 'User Login';
  }, []);
  
  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={submitForm} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <h2>Login</h2>
        {error && <p className='text-danger'>{error}</p>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input value={studentLoginData.email} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={studentLoginData.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" name="password" required />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
