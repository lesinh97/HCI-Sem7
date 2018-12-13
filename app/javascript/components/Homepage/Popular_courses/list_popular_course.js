import React from "react";
import Popular_single_course from "./popular_single_course";
import teacher_boom from "../../../assets/img/homepage/popular_course/course1.jpg"

class List_popular_course extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        {}
        {
          this.props.course_name.map((item) => (
            <Popular_single_course course_name = {item} 
              teacher_name={this.props.teacher_name[this.props.course_name.indexOf(item)]}
              teacher_pic = {this.props.teacher_pic[this.props.course_name.indexOf(item)]}
              single_course_description = {this.props.single_course_description}     
              />
          ))
          }     
        {}
      </div>
    );
  }
}

export default List_popular_course;
