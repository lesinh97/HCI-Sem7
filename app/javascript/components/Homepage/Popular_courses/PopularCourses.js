import React from "react";
import List_popular_course from "./list_popular_course";

class PopularCourses extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="popular_courses lite_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main_title">
                <h2>Popular Courses</h2>
                <p>
                  {this.props.course_description}
                </p>
              </div>
            </div>
          </div>
          <List_popular_course course_name = {this.props.course_name}
            teacher_name = {this.props.teacher_name}
            teacher_pic= {this.props.teacher_pic}
            single_course_description = {this.props.single_course_description}  />
        </div>
      </div>
    );
  }
}

export default PopularCourses;