import React from "react";
import ReactDOM from 'react-dom'
import Banner_inner from "../components/Homepage/Banner/banner_inner";
import banner_backgound from "../assets/img/homepage/banner.jpg"
import registerServiceWorker from '../registerServiceWorker';


const bannerStyle = {
  backgroundImage: "url(" + banner_backgound + ")",
  backgroundSize: "cover",
  overflow: "hidden"
};
const Banner = () => {
    return (
      <section className="home_banner_area" style ={bannerStyle}>
        <Banner_inner />
      </section>
    );
}

export default Banner;

ReactDOM.render(<Banner />, document.getElementById('banner'));
registerServiceWorker();
