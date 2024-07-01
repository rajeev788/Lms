import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/v1/teacher';

export const TeacherRegister = () => {
  const [teacherData, setTeacherData] = useState({
    full_name: '',
    email: '',
    password: '',
    qualification: '',
    mobile_no: '',
    skills: '',
    status: ''
  });

  // Change element value
  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const submitForm = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    const teacherFormData = new FormData();
    teacherFormData.append('full_name', teacherData.full_name);
    teacherFormData.append('email', teacherData.email);
    teacherFormData.append('password', teacherData.password);
    teacherFormData.append('qualification', teacherData.qualification);
    teacherFormData.append('mobile_no', teacherData.mobile_no);
    teacherFormData.append('skills', teacherData.skills);

    console.log('Submitting the following data:', teacherData);

    try {
      axios.post(baseUrl, teacherFormData, {
        
      }).then((response) => {
        setTeacherData({
          full_name: '',
          email: '',
          password: '',
          qualification: '',
          mobile_no: '',
          skills: '',
          status: 'success'
        });
      }).catch((error) => {
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
      });
    } catch (error) {
      console.error('There was an error!', error);
      setTeacherData({'status':error})
    }
  };

  useEffect(() => {
    document.title = 'Teacher Register';
  }, []);

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if (teacherLoginStatus=='true'){
  window.location.href='/teacher-dashboard'
}
 

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh' }}>
        
        <form onSubmit={submitForm} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
          <div className="mb-3">
          {teacherData.status=='success' && <p className='text-success'> thanks for your registration</p>}
          {!teacherData.status=='error' && <p className='text-danger'> something wrong happend</p>}
            <h2>Teacher Register</h2>
            <label htmlFor="full_name" className="form-label">Full Name</label>
            <input onChange={handleChange} value={teacherData.full_name} type="text" className="form-control" name="full_name" id="full_name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input onChange={handleChange} value={teacherData.email} type="email" className="form-control" name="email" id="email" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={handleChange} value={teacherData.password} type="password" className="form-control" name="password" id="password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="qualification" className="form-label">Qualification</label>
            <input onChange={handleChange} value={teacherData.qualification} type="text" className="form-control" name="qualification" id="qualification" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile_no" className="form-label">Mobile No</label>
            <input onChange={handleChange} value={teacherData.mobile_no} type="text" className="form-control" name="mobile_no" id="mobile_no" required />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">Skills</label>
            <input onChange={handleChange} value={teacherData.skills} type="text" className="form-control" name="skills" id="skills" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" required />
            <label className="form-check-label" htmlFor="termsCheck">I agree to the terms and conditions</label>
          </div>
          <button  type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};
