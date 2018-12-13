import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Department from './Department/Department';
import PopularCourses from './Popular_courses/PopularCourses';
import FactArea from './Fact_area/FactArea';
import RegistrationArea from './Registration/RegistrationArea'
import EventArea from './Event/EventArea'
import FooterArea from './Footer/FooterArea'

import { connect } from 'react-redux';

class Homepage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Feature />
                <Department depart_name = {this.props.departments.depart_name}
                        depart_style = {this.props.departments.depart_style}
                        icon = {this.props.departments.icon}
                        depart_description = {this.props.departments.depart_description}
                />
                <PopularCourses course_name = {this.props.courses.course_name} 
                        teacher_name = {this.props.courses.teacher_name}
                        teacher_pic = {this.props.courses.teacher_pic}
                        course_description = {this.props.courses.course_description}
                        single_course_description = {this.props.courses.single_course_description} />
                <FactArea />
                <RegistrationArea />
                <EventArea event_name = {this.props.events.event_name}
                        event_img = {this.props.events.event_img}
                        init_day = {this.props.events.init_day} />
                <FooterArea />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.homepage.events,
        departments: state.homepage.departments,
        courses: state.homepage.courses
    }
}

export default connect(mapStateToProps, null)(Homepage);