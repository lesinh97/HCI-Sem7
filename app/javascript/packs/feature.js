import React from "react";
import ReactDOM from 'react-dom';
import Justify_list from "../components/Homepage/Feature/justify_list";
import registerServiceWorker from '../registerServiceWorker';
class Feature extends React.Component {
  render() {
    return (
      <section className="feature_area">
        <div className="container">
          <Justify_list />
        </div>
      </section>
    );
  }
}

export default Feature;
ReactDOM.render(<Feature />, document.getElementById('feature'));
registerServiceWorker();
