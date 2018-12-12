import React from "react";
import teacher_boom from "../../../assets/img/homepage/popular_course/course1.jpg"

class Popular_single_course extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <div className="single_course">
          <div className="course_head overlay">
            <img
              className="img-fluid w-100"
              src={this.props.avatar}
              width={"30"} height={"30"}
            />
            <div className="authr_meta">
              <img src={this.props.avatar} width={"30"} height={"30"} />
              <span>{this.props.name}</span>
            </div>
          </div>
          <div className="course_content">
            <h4>
              <a href="course-details.html">Learn React js beginners</a>
            </h4>
            <p>
              When television was young, there was a huge popular show based on
              the still popular fictional character of Superman.
            </p>
            <div className="course_meta d-flex justify-content-between">
              <div>
                <span className="meta_info">
                  <a href="#">
                    <i className="lnr lnr-user" />
                    355
                  </a>
                </span>
                <span className="meta_info">
                  <a href="#">
                    <i className="lnr lnr-bubble" />
                    35
                  </a>
                </span>
              </div>
              <div>
                <span className="price">$150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular_single_course;
