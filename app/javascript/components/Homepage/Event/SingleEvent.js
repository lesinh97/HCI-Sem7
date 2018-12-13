import React from "react";

class SingleEvent extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="single_event">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5">
                  <div className="event_thumb">
                    <img src={this.props.image} alt ="" width={"400"} height={"200"} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="event_details">
                    <p>25th February, 2017</p>
                    <h4>
                      <a href="#">The Universe Through A Child S Eyes</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore dolor sit amet
                      consec tetur adipisicing elit sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
