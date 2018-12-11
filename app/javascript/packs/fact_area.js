import React from "react";
import ReactDOM from 'react-dom';
import Fact_single from "../components/Homepage/Fact_area/fact_single";
import registerServiceWorker from '../registerServiceWorker';

class Fact_area extends React.Component {
  render() {
    return (
      <div className="fact_area overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main_title">
                <h2>Facts that Make us Unique</h2>
                <p>
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {}
            <Fact_single />
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default Fact_area;

ReactDOM.render(<Fact_area />, document.getElementById('fact_area'));
registerServiceWorker();
