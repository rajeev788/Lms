import React, { useEffect, useState } from 'react';
import { SidebarforTeacher } from '../Teacher/SidebarforTeacher';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1';

export const EnrolledStudents = () => {
  const [studentData, setStudentData] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    document.title = 'Enrolled Students';

    const fetchEnrolledStudents = async () => {
      try {
        const response = await axios.get(`${baseURL}/fetch-enrolled-students/${courseId}`);
        console.log('Response data:', response.data); // Log the response data
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching enrolled students:', error);
      }
    };

    fetchEnrolledStudents();
  }, [courseId]);

  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <SidebarforTeacher />
        </aside>
        <section className='col-md-9'>
          <div className='card mt-4'>
            <h5 className='card-header'>Enrolled Students</h5>
            <div className='card-body'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((row, index) => (
                    <tr>
                      <td>
                        <Link to={`/view-student/${row.student.id}`}>{row.student?.full_name}</Link>
                      </td>
                      <td>{row.student.email}</td>
                      <td>{row.student.username}</td>
                      <td>
                        <Link className='btn btn-success btn-sm ml-3 mt-2' to={`/view-student/${row.student?.id}`}>
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
