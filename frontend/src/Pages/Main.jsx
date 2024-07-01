import React from 'react'
import { DetailTeacher } from './TeacherDetail/DetailTeacher'
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
import { TeacherDashboard } from './Teacher/TeacherDashboard'
import { TeacherRegister } from './Teacher/TeacherRegister'
import { Techerlogin } from './Teacher/Techerlogin'
import { TeacherChangePassword } from './Teacher/TeacherChangePassword'
import { TeacherProfileSEttings } from './Teacher/TeacherProfileSEttings'
import { MYTeachercourse } from './Teacher/MYTeachercourse'
import { AddCourse } from './Teacher/AddCourse'
import { MYUsers } from './Teacher/MYUsers'
import { Allcourses } from './AllCourses/Allcourses'
import { PopularCourses } from './AllCourses/PopularCourses'
import { PopularTeachers } from './Teacher/PopularTeachers'
import { Categorycourses } from './AllCourses/Categorycourses'
import { Teacherlogout } from './Teacher/Teacherlogout'
import { AddChapter } from './Teacher/AddChapter'
import { AllChapters } from './AllCourses/AllChapters'
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
        <Route path="/teacher-register" element={<TeacherRegister/>}/>
        <Route path="/teacher-login" element={<Techerlogin/>}/>
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
        <Route path="/teacher-change-password" element={<TeacherChangePassword/>}/>
        <Route path="/teacher-profile-settings" element={<TeacherProfileSEttings/>}/>
        <Route path="/teacher-my-course" element={<MYTeachercourse/>}/>
        <Route path="/teacher-add-course" element={<AddCourse/>}/>
        <Route path="/teacher-my-users" element={<MYUsers/>}/>
        <Route path="/teacher-detail/:teacher_id" element={<DetailTeacher/>}/>
        <Route path="/all-courses" element={<Allcourses/>}/>
        <Route path="/popular-courses" element={<PopularCourses/>}/>
        <Route path="/popular-teachers" element={<PopularTeachers/>}/>
        <Route path="/category/:category_slug" element={<Categorycourses/>}/>
        <Route path="/teacher-logout" element={<Teacherlogout/>}/>
        <Route path="/teacher-add-chapter/:courseId" element={<AddChapter/>}/>
        <Route path="/teacher-all-chapter/:courseId" element={<AllChapters/>}/>

    




      </Switch>
      
      <Footer/>

    </div>
  )
}
