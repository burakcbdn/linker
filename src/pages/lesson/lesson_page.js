import React, { useEffect, useState } from "react";
import './lesson_page.css'
import PlusIcon from '../../plus.svg';


function LessonPage({match}) {

    const lessonId = match.params.lessonId;


    return (
        <div className="lesson-page">
            <div className= "lesson-title">
                <h1> {lessonId[0].toUpperCase() + lessonId.slice(1)} linkler</h1>
         
                <img src={PlusIcon} alt="" height="40px" className="plusIcon" onClick={ }/>
            
            </div>
            

        </div>
    );
}

export default LessonPage;