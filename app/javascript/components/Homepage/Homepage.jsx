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
// pic for events
import event1 from '../../../assets/stylesheets/homepage/img/event1.jpg'
import event2 from '../../../assets/stylesheets/homepage/img/event2.jpg'
import event3 from '../../../assets/stylesheets/homepage/img/event3.jpg'
import event4 from '../../../assets/stylesheets/homepage/img/event4.jpg'
// pic for courses
import teacher1 from "../../assets/img/homepage/popular_course/course1.jpg"
import teacher2 from "../../assets/img/homepage/popular_course/course2.jpeg"
import teacher3 from "../../assets/img/homepage/popular_course/course3.jpg"
import teacher4 from "../../assets/img/homepage/popular_course/course4.png"
// pic for department
import lang_icon from "../../assets/img/homepage/deparment/icon1.png";
import bussi_icon from "../../assets/img/homepage/deparment/icon2.png"
import litt_icon from "../../assets/img/homepage/deparment/icon3.png"
import software_icon from "../../assets/img/homepage/deparment/icon4.png"
import design_icon from "../../assets/img/homepage/deparment/icon5.png"
import coach_icon from "../../assets/img/homepage/deparment/icon6.png"
import dev_icon from "../../assets/img/homepage/deparment/icon7.png"


// import '../../../assets/stylesheets/homepage/css/bootstrap.css';
// import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../../../assets/stylesheets/homepage/css/style.css';
// import '../../../assets/stylesheets/homepage/vendors/lightbox/simpleLightbox.css';
// import '../../../assets/stylesheets/homepage/vendors/nice-select/css/nice-select.css';
 //import '../../../assets/stylesheets/homepage/vendors/owl-carousel/owl.crousel.min.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {
                event_name:[
                    "Bomman_cache",
                    "Bomman_mirage",
                    "Bomman_inferno",
                    "Bomman_overpass"
                ],
                event_img:[
                   event1, event2, event3, event4
                ],
                init_day:[
                    "31st February, 2018",
                    "31st February, 2018",
                    "31st February, 2018",
                    "31st February, 2018"
                ]
            },
            courses: {
                course_description: "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                single_course_description: "When television was young, there was a huge popular show based on the still popular fictional character of Superman.",
                course_name:[
                    "Full eco rush mid",
                    "Họa mi hót",
                    "Sinh bắn hay",
                    "Rush B non stop"
                ],
                teacher_name:[
                    "Bomman",
                    "Mai Nam Hai",
                    "Anh trong tai",
                    "de_vailon"
                ],
                teacher_pic:[
                    teacher1, teacher2, teacher3, teacher4
                ]
            },
            departments: {
                icon:[
                    lang_icon,
                    bussi_icon,
                    litt_icon,
                    software_icon,
                    design_icon,
                    coach_icon,
                    dev_icon,
                  ],
                  depart_name:[
                    "English",
                    "Big data",
                    "Science",
                    "Software",
                    "Design",
                    "Coaching",
                    "Development",
                  ],
                  depart_style:[
                    "col-lg-4 col-md-4 col-sm-6 col-12 text-center mt-100 center",
                    "col-lg-4 col-md-4 col-sm-6 col-12 text-center center",
                    "col-lg-4 col-md-4 col-sm-6 col-12 text-center mt-100",
                    "col-lg-4 col-md-4 col-sm-6 col-12 text-center center",
                    "col-lg-4 col-md-4 col-sm-6 col-12 text-center mt--100",
                    "col-lg-4 col-md-4 col-sm-6 col-12 text-center",
                    "offset-lg-4 col-lg-4 col-md-4 col-sm-6 col-12 text-center mt--100",
                  ],
                  depart_description: "Họa mi của bạn đã biết hót chưa?"
            }
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Feature />
                <Department depart_name = {this.state.departments.depart_name}
                        depart_style = {this.state.departments.depart_style}
                        icon = {this.state.departments.icon}
                        depart_description = {this.state.departments.depart_description}
                />
                <PopularCourses course_name = {this.state.courses.course_name} 
                        teacher_name = {this.state.courses.teacher_name}
                        teacher_pic = {this.state.courses.teacher_pic}
                        course_description = {this.state.courses.course_description}
                        single_course_description = {this.state.courses.single_course_description} />
                <FactArea />
                <RegistrationArea />
                <EventArea event_name = {this.state.events.event_name}
                        event_img = {this.state.events.event_img}
                        init_day = {this.state.events.init_day} />
                <FooterArea />
            </div>
        )
    }
}

export default Homepage;