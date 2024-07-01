import React, { useEffect, useState } from 'react';
import { SidebarforTeacher } from './SidebarforTeacher';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1/course';

export const AddCourse = () => {
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: "",
        title: '',
        description: '',
        f_img: null,
        techs: ''
    });

    const handleChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        });
    };
    
    const teacherId = localStorage.getItem('teacherId');
    
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
        _formData.append('teacher', teacherId); // Assuming the teacher ID is hardcoded for now
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

        axios.post(baseURL, _formData)
        .then((res) => {
            window.location.href = '/teacher-add-course';
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
        document.title = 'Add Course';
        axios.get(baseURL)
            .then((res) => {
                console.log('API response:', res.data); // Log the response data
                setCats(res.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <SidebarforTeacher />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                            <form onSubmit={formSubmit}>
                                <div className="mb-3 row">
                                    <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                                    <div className="col-sm-10">
                                        <select name='category' className='form-control' onChange={handleChange}>
                                            <option value="">Select Category</option>
                                            {cats.map((category, index) => (
                                                <option key={index} value={category.id}>{category.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input name="title" onChange={handleChange} type="text" className="form-control" id="title" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <input name="description" onChange={handleChange} type="text" className="form-control" id="description" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="f_img" className="col-sm-2 col-form-label">Featured Image</label>
                                    <div className="col-sm-10">
                                        <input name="f_img" onChange={handleFileChange} type="file" className="form-control" id="f_img" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="techs" className="col-sm-2 col-form-label">Technologies</label>
                                    <div className="col-sm-10">
                                        <input name="techs" onChange={handleChange} type="text" className="form-control" id="techs" />
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
