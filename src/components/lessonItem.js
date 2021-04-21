import React from "react";
import './lesson-item.css';
import {Link} from 'react-router-dom';

function LessonItem(props) {
  

    return (
      <Link to={`/${props.lesson.id}`} className="lesson-item" style={{ backgroundColor : `${props.lesson.hoverColor}` }}  >
        <div >
          <span><h4 className="title">{props.lesson.name}</h4></span>
        </div>  
      </Link>
    );
}

export default LessonItem;