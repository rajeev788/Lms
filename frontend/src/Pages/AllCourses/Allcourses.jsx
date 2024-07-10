import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api/v1';

export const Allcourses = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    document.title = 'All Courses';
    try {
      axios.get(baseURL + '/course').then((res) => {
        setCourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='container mt-3'>
      <h3 className='pb-1 mb-4'>Latest Courses</h3>
      <div className='row mb-4'>
        {courseData && courseData.map((course, index) => (
          <div className='col-md-3 mb-3' key={index}>
            <div className="card">
              <Link to={`/detail/${course.id}`}>
                <img
                  src={course.featured_img}
                  className="card-img-top"
                  alt={course.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/detail/${course.id}`}>{course.title}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
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
  );
};
