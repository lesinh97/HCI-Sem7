import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Department from './Department/Department';
import PopularCourses from './Popular_courses/PopularCourses';
import FactArea from './Fact_area/FactArea';

// import '../../assets/css/homepage/css/bootstrap.css';
// import '../../assets/css/homepage/css/font-awesome.min.css';
// import '../../assets/css/homepage/css/style.css';
// import '../../assets/css/homepage/lightbox/simpleLightbox.css';
// import '../../assets/css/homepage/nice-select/css/nice-select.css';
// import '../../assets/css/homepage/owl-carousel/owl.crousel.min.css';

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
            </div>
        )
    }
}

export default Homepage;