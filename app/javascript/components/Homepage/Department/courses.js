import React from "react";
import Single_course from "./single_course";
import lang_icon from "../../../assets/img/homepage/deparment/icon1.png";
import bussi_icon from "../../../assets/img/homepage/deparment/icon2.png"
import litt_icon from "../../../assets/img/homepage/deparment/icon3.png"
import software_icon from "../../../assets/img/homepage/deparment/icon4.png"
import design_icon from "../../../assets/img/homepage/deparment/icon5.png"
import coach_icon from "../../../assets/img/homepage/deparment/icon6.png"
import dev_icon from "../../../assets/img/homepage/deparment/icon7.png"



 var icon = [
    lang_icon,
    bussi_icon,
    litt_icon,
    software_icon,
    design_icon,
    coach_icon,
    dev_icon,
  ];

var  course_style = [
  "col-lg-4 col-md-4 col-sm-6 col-12 text-center mt-100",
  "col-lg-4 col-md-4 col-sm-6 col-12 text-center",
  "col-lg-4 col-md-4 col-sm-6 col-12 text-center mt-100",
  "col-lg-4 col-md-4 col-sm-6 col-12 text-center",
  "col-lg-4 col-md-4 col-sm-6 col-12 text-center mt--100",
  "col-lg-4 col-md-4 col-sm-6 col-12 text-center",
  "offset-lg-4 col-lg-4 col-md-4 col-sm-6 col-12 text-center mt--100"
  ];

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style :course_style
    }
  }

  render() {
    return (
      <div className="dpmt_courses">
        <div className="row">
          {}
          {
          this.state.style.map(item => (
            <Single_course style= {item} icon = {icon.getValue(course_style.indexOf(item))} />
          ))
          }         
          {}
        </div>
      </div>
    );
  }
}

export default Courses;
