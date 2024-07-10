import React, { useEffect, useState } from 'react';
import { SidebarforTeacher } from '../Teacher/SidebarforTeacher';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const baseURL = 'http://127.0.0.1:8000/api/v1';

export const EditChapter = () => {
    const [ChapterData, setChapterData] = useState({
        course: '',
        title: '',
        description: '',
        video: null,
        remarks: ''
    });

    const { chapterId } = useParams();
  

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

    const formSubmit = (e) => {
        e.preventDefault();
        const _formData = new FormData();

        _formData.append('course', ChapterData.course);
        _formData.append('title', ChapterData.title);
        _formData.append('description', ChapterData.description);
        if (ChapterData.video instanceof File) {
            _formData.append('video', ChapterData.video, ChapterData.video.name);
        }
        _formData.append('remarks', ChapterData.remarks);

        axios.put(`${baseURL}/chapter/${chapterId}`, _formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            console.log(res);
            alert('Form submitted');
           // or wherever you want to redirect after submission
        })
        .catch((error) => {
            console.error('There was an error submitting the form!', error);
        });
    };

    useEffect(() => {
        document.title = 'Teacher Course';
        axios.get(`${baseURL}/chapter/${chapterId}`)
            .then((res) => {
                setChapterData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [chapterId]);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <SidebarforTeacher />
                </aside>
                <div className='col-9'>
                    <div className='card'>
                        <h5 className='card-header'>Update Chapter</h5>
                        <div className='card-body'>
                            <form onSubmit={formSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="title" className='form-label'>Title</label>
                                    <input
                                        type="text"
                                        value={ChapterData.title}
                                        name="title"
                                        onChange={handleChange}
                                        id='title'
                                        className='form-control ml-1'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="description" className='form-label'>Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={ChapterData.description}
                                        onChange={handleChange}
                                        id='description'
                                        className='form-control ml-1'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="video" className='form-label'>Video</label>
                                    <input
                                        type="file"
                                        name="video"
                                        onChange={handleFileChange}
                                        id='video'
                                        className='form-control ml-1'
                                    />
                                </div>
                                {ChapterData.video && (
                                    <video controls width="100%" className='mt-2'>
                                        {typeof ChapterData.video === 'string' ? (
                                            <>
                                                <source src={ChapterData.video} type="video/webm" />
                                                <source src={ChapterData.video} type="video/mp4" />
                                            </>
                                        ) : (
                                            <>
                                                <source src={URL.createObjectURL(ChapterData.video)} type="video/webm" />
                                                <source src={URL.createObjectURL(ChapterData.video)} type="video/mp4" />
                                            </>
                                        )}
                                        Sorry, your browser does not support this video.
                                    </video>
                                )}
                                <div className='mb-3'>
                                    <label htmlFor="remarks" className='form-label ml-1'>Remarks</label>
                                    <input
                                        onChange={handleChange}
                                        value={ChapterData.remarks}
                                        type="text"
                                        name="remarks"
                                        id='remarks'
                                        className='form-control'
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
