import React from 'react'
import { Home } from './Home'
import { Header } from './Header'
import { Footer } from './Footer'
import { Route,Routes as Switch } from 'react-router-dom'
import { About } from './About'
import { CourseDetail } from './CourseDetail'
import { Login } from './Login'
import { Register } from './Register'
import { Dashboard } from './Dashboard'
import { Mycourses } from './Mycourses'
import { FavoriteCourses } from './FavoriteCourses'
import { RecommendedCourse } from './RecommendedCourse'
import { Profilesetting } from './Profilesetting'
import { Changepassword } from './Changepassword'
export const Main = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:course_id" element={<CourseDetail/>}/>
        <Route path="/user-login" element={<Login/>}/>
        <Route path="/user-register" element={<Register/>}/>
        <Route path="/user-dashboard" element={<Dashboard/>}/>
        <Route path="/my-courses" element={<Mycourses/>}/>
        <Route path="/favorite-courses" element={<FavoriteCourses/>}/>
        <Route path="/recommended-courses" element={<RecommendedCourse/>}/>
        <Route path="/profile-settings" element={<Profilesetting/>}/>
        <Route path="/change-password" element={<Changepassword/>}/>



      </Switch>
      
      <Footer/>

    </div>
  )
}
