import React from "react";
import Single_course from "./single_course";

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dpmt_courses">
        <div className="row">
          {}
          {
            this.props.depart_style.map((item, index) => (
              <Single_course depart_style={item}
                depart_name={this.props.depart_name[this.props.depart_style.indexOf(item)]}
                icon = {this.props.icon[this.props.depart_style.indexOf(item)]} key={index} />
            ))
          }
          {}
        </div>
      </div>
    );
  }
}

export default Courses;
