import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Department from './Department/Department';
import PopularCourses from './Popular_courses/PopularCourses';
import FactArea from './Fact_area/FactArea';
import Testimonial from './Testimonial/Testimonial'
import RegistrationArea from './Registration/RegistrationArea'
import EventArea from './Event/EventArea'
import FooterArea from './Footer/FooterArea'
// import '../../../assets/stylesheets/homepage/css/bootstrap.css';
// import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../../../assets/stylesheets/homepage/css/style.css';
// import '../../../assets/stylesheets/homepage/vendors/lightbox/simpleLightbox.css';
// import '../../../assets/stylesheets/homepage/vendors/nice-select/css/nice-select.css';
 //import '../../../assets/stylesheets/homepage/vendors/owl-carousel/owl.crousel.min.css';

class Homepage extends Component {

    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Feature />
                <Department />
                <PopularCourses />
                <FactArea />
                <RegistrationArea />
                <EventArea />
                <FooterArea />
            </div>
        )
    }
}

export default Homepage;