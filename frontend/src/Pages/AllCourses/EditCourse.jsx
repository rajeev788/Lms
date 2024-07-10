import React, { useEffect, useState } from 'react';
import { SidebarforTeacher } from '../Teacher/SidebarforTeacher';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const baseURL = 'http://127.0.0.1:8000/api/v1';

export const EditCourse = () => {
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        prev_img: '',
        f_img: null,
        techs: ''
    });
    const [teacherId, setTeacherId] = useState(null);

    const { courseId } = useParams(); // Correctly extract courseId from useParams

    const handleChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setCourseData({
            ...courseData,
            f_img: e.target.files[0]
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();

        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', teacherId); // Include the teacher ID
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        if (courseData.f_img) {
            _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        }
        _formData.append('techs', courseData.techs);

        // Log FormData content
        for (let pair of _formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        console.log(`Submitting form for course ID: ${courseId}`);

        axios.put(`${baseURL}/teacher-courses-Id/${courseId}`, _formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        title: "Data has been updated",
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
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

    useEffect(() => {
        document.title = 'Edit Course';
        axios.get(`${baseURL}/category`)
            .then((res) => {
                console.log('API response:', res.data);
                setCats(res.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the categories!', error);
            });

        axios.get(`${baseURL}/teacher-courses-Id/${courseId}`)
            .then((res) => {
                setCourseData({
                    category: res.data.category,
                    title: res.data.title,
                    description: res.data.description,
                    prev_img: res.data.featured_img,
                    f_img: null,
                    techs: res.data.techs,
                });
                setTeacherId(res.data.teacher); // Store the teacher ID
            })
            .catch((error) => {
                console.log('There was an error fetching the course data!', error);
            });
    }, [courseId]);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <SidebarforTeacher />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Edit Course</h5>
                        <div className='card-body'>
                            <form onSubmit={formSubmit} encType="multipart/form-data">
                                <div className="mb-3 row">
                                    <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                                    <div className="col-sm-10">
                                        <select name='category' className='form-control' onChange={handleChange} value={courseData.category}>
                                            <option value=''>Select Category</option>
                                            {cats.map((category, index) => (
                                                <option key={index} value={category.id}>{category.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input value={courseData.title} name="title" onChange={handleChange} type="text" className="form-control" id="title" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <input value={courseData.description} name="description" onChange={handleChange} type="text" className="form-control" id="description" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="f_img" className="col-sm-2 col-form-label">Featured Image</label>
                                    <div className="col-sm-10">
                                        <input name="f_img" onChange={handleFileChange} type="file" className="form-control" id="f_img" />
                                        {courseData.prev_img && (
                                            <img className='mt-2' src={courseData.prev_img } width='300' alt='Featured' />
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="techs" className="col-sm-2 col-form-label">Technologies</label>
                                    <div className="col-sm-10">
                                        <input name="techs" onChange={handleChange} value={courseData.techs} type="text" className="form-control" id="techs" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className='btn btn-primary'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
