import React from "react";
import Courses from "./courses";
import Course_description from "./course_description";

class Department extends React.Component {
  render() {
    return (
      <div className="department_area section_gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Courses />
            </div>
            <Course_description />
          </div>
        </div>
      </div>
    );
  }
}

export default Department;
