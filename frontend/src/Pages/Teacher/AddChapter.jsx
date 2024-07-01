import React, { useEffect, useState } from 'react';
import { SidebarforTeacher } from './SidebarforTeacher';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const baseURL = 'http://127.0.0.1:8000/api/v1/chapter';

export const AddChapter = () => {
    const [ChapterData, setChapterData] = useState({
        title: '',
        description: '',
        video: null,
        remarks: ''
    });


    const handleChange = (e) => {
        setChapterData({
            ...ChapterData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setChapterData({
            ...ChapterData,
            video: e.target.files[0]
        });
    };

    const {courseId}=useParams()

    const formSubmit = (e) => {
        e.preventDefault();
        const _formData = new FormData();
        

        _formData.append('course', courseId); // Use dynamic course ID from URL params
        _formData.append('title', ChapterData.title);
        _formData.append('description', ChapterData.description);
        if (ChapterData.video) {
            _formData.append('video', ChapterData.video, ChapterData.video.name);
        }
        _formData.append('remarks', ChapterData.remarks);

        axios.post(baseURL, _formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
           window.location.href ='/teacher-add-course'// Use history.push for navigation
        })
        .catch((error) => {
            console.error('There was an error submitting the form!', error);
        });
    };

    useEffect(() => {
        document.title = 'Add Chapter';
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <SidebarforTeacher />
                </aside>
                <div className='col-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Chapter</h5>
                        <div className='card-body'>
                            <form onSubmit={formSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="title" className='form-label'>Title</label>
                                    <input type="text" name="title" onChange={handleChange} id='title' className='form-control ml-1' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="description" className='form-label'>Description</label>
                                    <input type="text" name="description" onChange={handleChange} id='description' className='form-control ml-1' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="video" className='form-label'>Video</label>
                                    <input type="file" name="video" onChange={handleFileChange} id='video' className='form-control ml-1' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="remarks" className='form-label ml-1'>
                                        Remarks
                                    </label>
                                    <input onChange={handleChange} type="text" name="remarks" id='remarks' className='form-control' />
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
