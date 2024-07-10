import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const siteUrl = 'http://127.0.0.1:8000/';
const baseURL = 'http://127.0.0.1:8000/api/v1';

const CategoryCourses = () => {
  const [courseData, setCourseData] = useState([]);
  const { category_slug } = useParams();

  useEffect(() => {
    document.title = 'Category Course';
    console.log("Fetching data for category:", category_slug); // Log category_slug

    axios.get(`${baseURL}/course/?category=${category_slug}`)
      .then((res) => {
        console.log("API response:", res.data); // Log the API response
        setCourseData(res.data);
      
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [category_slug]);

  return (
    <div className='container mt-3'>
      <h3 className='pb-1 mb-4'>{category_slug}</h3>
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
      {/* Pagination */}
      {/* <nav aria-label="Page navigation example mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav> */}
    </div>
  );
};

export default CategoryCourses