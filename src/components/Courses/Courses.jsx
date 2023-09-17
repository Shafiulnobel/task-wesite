import React from 'react';
import { useState,useEffect } from 'react';
import Course from '../Course/Course';
const Courses = () => {
    const[courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className="pt-5 container mx-auto my-6">
            {/* All courses section start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
            {
                courses.map(course=><Course
                key={course.id}
                course={course}
                ></Course>)
            }       
            </div>
            {/* All courses section end */}
            <div className="flex justify-center my-7">
            <button className="rounded-md bg-green-400 text-white p-2.5">View All Courses</button>
            </div>
        </div>
    );
};

export default Courses;