import React, { useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/v1/student';

export const Register = () => {

  const [studentData, setStudentData] = useState({
    full_name: '',
    email: '',
    username: '',
    password: '',
    interest: '',
    status: ''
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const submitForm = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    const StudentFormData = new FormData();
    StudentFormData.append('full_name', studentData.full_name);
    StudentFormData.append('email', studentData.email);
    StudentFormData.append('username', studentData.username);
    StudentFormData.append('password', studentData.password);
    StudentFormData.append('interest', studentData.interest);

    console.log('Submitting the following data:', studentData);

    axios.post(baseUrl, StudentFormData)
      .then((response) => {
        setStudentData({
          full_name: '',
          email: '',
          username: '',
          password: '',
          interest: '',
          status: 'success'
        });
      })
      .catch((error) => {
        if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
        setStudentData({ ...studentData, status: 'error' });
      });
  };
const studentLoginStatus=localStorage.getItem('studentLoginStatus')
if (studentLoginStatus=='true'){
  pass
}
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh', paddingTop: '100px', paddingBottom: '100px' }}>
        <form onSubmit={submitForm} style={{ width: '300px', marginTop: '50px', padding: '30px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
          <div className="mb-3">
          {studentData.status=='success' && <p className='text-success'> thanks for your registration</p>}
          {!studentData.status=='error' && <p className='text-danger'> something wrong happend</p>}
            <label htmlFor="inputfullname" className="form-label">Full Name</label>
            <input value={studentData.full_name} onChange={handleChange} type="text" className="form-control" name='full_name' id="inputfullname" required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input value={studentData.email} onChange={handleChange} type="email" className="form-control" name='email' id="inputEmail" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">Username</label>
            <input value={studentData.username} onChange={handleChange} type="text" name='username' className="form-control" id="inputUsername" required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input value={studentData.password} onChange={handleChange} type="password" name='password' className="form-control" id="inputPassword" required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputInterest" className="form-label">Interest</label>
            <input value={studentData.interest} onChange={handleChange} type="text" name='interest' className="form-control" id="inputInterest" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" required />
            <label className="form-check-label" htmlFor="termsCheck">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};
