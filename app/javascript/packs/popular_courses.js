import React from "react";
import ReactDOM from 'react-dom';
import List_popular_course from "../components/Homepage/Popular_courses/list_popular_course";
import registerServiceWorker from '../registerServiceWorker';
class Popular_courses extends React.Component {
  render() {
    return (
      <div className="popular_courses lite_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main_title">
                <h2>Popular Courses</h2>
                <p>
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station.
                </p>
              </div>
            </div>
          </div>
          <List_popular_course />
        </div>
      </div>
    );
  }
}

export default Popular_courses;
ReactDOM.render(<Popular_courses />, document.getElementById('popular_courses'));
registerServiceWorker();
