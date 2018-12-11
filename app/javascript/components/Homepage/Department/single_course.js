import React from "react";

class Single_course extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={props.style}>
        <div className="single_department">
          <div className="dpmt_icon">
            <img src={props.icon} alt />
          </div>
          <h4>Languages</h4>
        </div>
      </div>
    );
  }
}

export default Single_course;
