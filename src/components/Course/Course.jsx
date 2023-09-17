import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar,faBookOpen,faClock,faUser,faVideo } from '@fortawesome/free-solid-svg-icons'
const Course = ({ course }) => {
    const { id, author, author_img, picture, title, quantity, students, time, lecture, rating, price, old_price, } = course;
    return (
        <div>
            {/* Single Course Section start */}
            <div className="card shadow-xl">
                <img className="p-3" src={picture} alt="course" />
                <div className="card-body">
                    <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={author_img} alt="" />
                        <h4 className="ms-2 font-semibold">{author}</h4>
                    </div>
                    <h4 className="text-gray-400"><span className="text-yellow-300 pe-3"><FontAwesomeIcon icon={faStar} /></span>({rating})</h4>
                    </div>
                   
                    <h2 className="font-semibold h-16 text-left">
                      {title}
                    </h2>
                    <div className="grid grid-cols-2 gap-4" >
                         <div className="text-left"> 
                           <p className="text-gray-400"><span className="pe-1"><FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon></span>{quantity} Lesson</p> 
                           </div>
                         <div className="text-left"> 
                           <p className="text-gray-400"><span className="pe-1"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></span>{students} Students</p> 
                           </div>
                         <div className="text-left"> 
                           <p className="text-gray-400"><span className="pe-1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>{time}</p> 
                           </div>
                         <div className="text-left"> 
                           <p className="text-gray-400"><span className="pe-1"><FontAwesomeIcon icon={faVideo}></FontAwesomeIcon></span>{lecture} Lectures</p> 
                           </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center pt-4">
       
                        <div className="flex justify-evenly">

                            <h4 className="text-lg pe-3 font-semibold">${price}</h4>
                            <h4 className="text-lg font-semibold text-gray-400"><strike>${old_price}</strike></h4>

                        </div>
                        <button className="rounded-md bg-green-400 text-white p-2.5">Add to Cart</button>
                    </div>
                </div>
            </div>
             {/* Single Course Section end */}
        </div>
    );
};

export default Course;