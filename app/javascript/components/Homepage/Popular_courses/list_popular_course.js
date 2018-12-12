import React from "react";
import Popular_single_course from "./popular_single_course";
import teacher_boom from "../../../assets/img/homepage/popular_course/course1.jpg"
const TEACHER = {
  name:[
    "Bomman",
    "Mai Nam Hai",
    "Anh trong tai",
    "de_vailon"
  ]
};
class List_popular_course extends React.Component {
  constructor(props) {
    super(props);
    this.state = TEACHER;
  }
  render() {
    return (
      <div className="row">
        {}
        {
          this.state.name.map((item,index) => (
            <Popular_single_course name= {item} avatar = {teacher_boom} key={index}/>
          ))
          }     
        {}
      </div>
    );
  }
}

export default List_popular_course;
