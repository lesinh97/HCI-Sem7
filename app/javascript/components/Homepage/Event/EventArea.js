import React from "react";
import SingleEvent from "./SingleEvent";
import event1 from '../../../../assets/stylesheets/homepage/img/event1.jpg'
import event2 from '../../../../assets/stylesheets/homepage/img/event2.jpg'

const IMAGE = {
  image: [
    event1, event2
  ]
}
class EventArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = IMAGE
  }
  render() {
    return (
      <div className="events_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main_title">
                <h2>Upcoming Events</h2>
                <p>
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
          {
            this.state.image.map((item, index) => (
            <SingleEvent image = {item} key={index}/>
              ))
            }    
          </div>
        </div>
      </div>
    );
  }
}

export default EventArea;
