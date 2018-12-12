import React from "react";
import icon from '../../../../assets/stylesheets/homepage/img/f-icons/icon1.png'
class Fact_single extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="single_fact">
          <div className="f_icon">
            <img src={icon} />
          </div>
          <h4>Expert Mentors</h4>
          <p>
            Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do
            eiusmod tempor incididunt labore dolor sit amet consec tetur
            adipisicing elit, sed do eiusmod tempor sed do eiusmod tempor
            incididunt labore dolor sit amet consec tetur adipisicing elit,
            seddo eiusmod tempor.
          </p>
        </div>
      </div>
    );
  }
}

export default Fact_single;
