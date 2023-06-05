import React, { useState } from "react";

import { dropdown } from "../assets";
import { styles }  from "../styles";

import COURSES from "../Courses";

const CourseMenu = ({ activeCourse, setActiveCourse, setActiveIndex, setActiveSem }) => {
    const [active, setActive ] = useState(false);
    const courses = Object.keys(COURSES);
  
    return (
      <div>
  
        <div className="flex items-center gap-1 ">
          <h2 
            className={` ${styles.sectionHeadText} flex items-center`} 
          >
            { !active? activeCourse.toUpperCase() : 
              <input 
                type="search" 
                className="xs:w-[230px] w-full rounded-xl max-h-10 text-sm font-light py-5 px-6"
                placeholder={"type your course"}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (courses.find((course) => (event.target.value.toLowerCase() === course)) === undefined) {
                      alert("Invalid Course or This Course is not Added Yet!")
                    } else {
                      console.log(courses.find((course) => (event.target.value.toUpperCase() === course)))
                      setActiveCourse(event.target.value.toLowerCase())
                      setActive(false);
                      setActiveIndex(0);
                      setActiveSem(COURSES[event.target.value]["activeSem"]);
                    }
                  }
                  }}
              >
              </input>}
          </h2>
              
          <img 
            src={dropdown} alt="dropdown" 
            className={`${active?"rotate-180 ":"" } sm:w-[55px] xs-[45px]  sm:h-[55px] xs:h-[45px] w-[45px] h-[45px] `}
            onClick={() => {
              setActive(!active);
            }
            }
          />
            
        </div>
        
        <div className={`${ !active ? "hidden": "relative" } top-2 xs:max-w-[280px] w-full black-gradient rounded-xl z-20 py-3 px-5 leading-8`}>
          {courses.map((course, index) => (
            <div 
              key={index}
              onClick={() => {
                setActiveCourse(course.toLowerCase());
                setActive(!active);
                setActiveIndex(0);
                setActiveSem(COURSES[course]["activeSem"]);
                console.log(COURSES[course]["activeSem"])
              }}
            >
              {course.toUpperCase()}
            </div>
          ))}
        </div>
  
      </div>
    )
}

export default CourseMenu;