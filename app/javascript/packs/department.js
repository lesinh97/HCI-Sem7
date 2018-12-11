import React from "react";
import ReactDOM from 'react-dom';
import Courses from "../components/Homepage/Department/courses";
import Course_description from "../components/Homepage/Department/course_description";
import registerServiceWorker from '../registerServiceWorker';


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

ReactDOM.render(<Department />, document.getElementById('department'));
registerServiceWorker();
