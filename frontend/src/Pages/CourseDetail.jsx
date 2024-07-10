import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const siteUrl = 'http://127.0.0.1:8000/';
const baseURL = 'http://127.0.0.1:8000/api/v1';

export const CourseDetail = () => {
  const [courseData, setCourseData] = useState({});
  const [userStatus, setUserStatus] = useState('');
  const [chapterData, setChapterData] = useState([]);
  const [teacherData, setTeacherData] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const [techData, setTechData] = useState([]);
  const [enrolledStatus, setEnrolledStatus] = useState('');
  const { courseId } = useParams();
  const studentId = localStorage.getItem('studentId');

  useEffect(() => {
    document.title = 'Course Detail';

    axios.get(`${baseURL}/course-Id/${courseId}`)
      .then((res) => {
        setCourseData(res.data);
        setTeacherData(res.data.teacher);
        setChapterData(res.data.course_chapters);
        setTechData(res.data.tech_list);
        try {
          setRelatedData(JSON.parse(res.data.related_videos));
        } catch (parseError) {
          console.error("Error parsing related_videos JSON:", parseError);
          setRelatedData([]); // Fallback to an empty array if parsing fails
        }
      })
      .catch((error) => console.log(error));

    const studentLoginStatus = localStorage.getItem('studentLoginStatus');
    if (studentLoginStatus === 'true') {
      setUserStatus('success');

      axios.get(`${baseURL}/fetch-enroll-status/${studentId}/${courseId}`)
        .then((res) => {
          if (res.data.bool == true) {
            setEnrolledStatus('success');
          }
        })
        .catch((error) => {
          console.error('Error fetching enrollment status:', error);
        });
    }
  }, [courseId, studentId]);

  const enrollCourse = (e) => {
    e.preventDefault();
    const _formData = new FormData();
    _formData.append('course', courseId);
    _formData.append('student', studentId);

    axios.post(`${baseURL}/student_enrollment`, _formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setEnrolledStatus('success');
          Swal.fire({
            title: 'You have successfully enrolled',
            icon: 'success',
            toast: true,
            timer: 2000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
          
        }
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
        if (error.response) {
          console.error('Error data:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
        }
      });
  };

  return (
    <div className="card mb-3 mt-4" style={{ maxWidth: '900px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img style={{ height: '100px', width: '100px' }} src={courseData.featured_img} className="img-fluid rounded-start" alt={courseData.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{courseData.title}</h5>
            <p className="card-text">{courseData.description}</p>
            <p>Course By: <b /><Link to={`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
            <p>
              <b />Techs:
              {techData.map((tech, index) => (
                <span key={index}>
                  <Link to={`/category/${tech.trim()}`} className='btn-warning'>{tech}</Link>
                </span>
              ))}
            </p>
            <p><b />Duration: 30 min</p>
            <p><b />Total Enrolled: {courseData.total_enrolled_students} students</p>
            <p><b />Rating: 4/5</p>
            {enrolledStatus == 'success' && userStatus == 'success' &&
              <p><span>You are already enrolled in this course</span></p>
            }
            {userStatus === 'success' && enrolledStatus !== 'success' &&
              <p><button onClick={enrollCourse} type='button' className='btn btn-primary btn-list'>Enroll in this course</button></p>
            }
            {userStatus !== 'success' &&
              <p><Link to='/user-login'>Login to Enroll in this course</Link></p>
            }
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      {/* course videos */}
      <div className='card'>
        <div className="card" style={{ width: "56rem" }}>
          <div className="card-header">
            In This Course
          </div>
          <ul className="list-group list-group-flush">
            {chapterData.map((chapter, index) => (
              <li key={chapter.id} className="list-group-item">
                {chapter.title}
                <span className='float-end'>
                  <span className='me-5'>1hr 50 min</span>
                  <button className='btn btn-sm float-end btn-danger'
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${index}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                      <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                    </svg>
                  </button>
                </span>

                <div className="modal fade" id={`exampleModal-${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${index}`} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`exampleModalLabel-${index}`}>Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="ratio ratio-16x9">
                          <iframe src={chapter.video} title={chapter.title} allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h5 className='pb-1 mb-4 mt-5'>Related Courses</h5>
      <div className='row'>
        {relatedData.map((rcourse, index) => (
          <div key={index} className='col-md-3'>
            <div className="card">
              <Link to={`/course-detail/${rcourse.pk}`}><img src={siteUrl + rcourse.fields.featured_img} className="card-img-top" alt={rcourse.fields.title} /></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to={`/course-detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
