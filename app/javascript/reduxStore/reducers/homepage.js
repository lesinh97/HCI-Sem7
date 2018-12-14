import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

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
///////////////////////////////////////////////////////////////////////////////////// import img như này là tào lao này
// fact
import icon1 from '../../../assets/stylesheets/homepage/img/f-icons/icon1.png'
import icon2 from '../../../assets/stylesheets/homepage/img/f-icons/icon2.png'
import icon3 from '../../../assets/stylesheets/homepage/img/f-icons/icon3.png'
import icon4 from '../../../assets/stylesheets/homepage/img/f-icons/icon4.png'
import icon5 from '../../../assets/stylesheets/homepage/img/f-icons/icon5.png'
import icon6 from '../../../assets/stylesheets/homepage/img/f-icons/icon6.png'
const initialState = {
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
    },
    facts: {
        fact_icon:[
            icon1, icon2, icon3, icon4, icon5, icon6
        ]
    }
}

const updateCourses = (state, action) => {
    return updateObject(state, {
        courses: action.newCoursesInfo
    });
};

const updateDepartments = (state, action) => {
    return updateObject(state, {
        departments: newDepartmentsInfo
    });
};

const updateEvents = (state, action) => {
    return updateObject(state, {
        events: action.newEventsInfo
    });
};

const updateFacts = (state, action) => {
    return updateObject(state, {
        facts: action.newFactsInfo
    });
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.HOMEPAGE_UPDATE_COURSES_INFO: return updateCourses(state, action);
        case actionTypes.HOMEPAGE_UPDATE_DEPARTMENTS_INFO: return updateDepartments(state, action);
        case actionTypes.HOMEPAGE_UPDATE_EVENTS_INFO: return updateEvents(state, action);
        case actionTypes.HOMEPAGE_UPDATE_FACTS_INFO: return updateFacts(state, action);
        default:
            return state;
    }
}

export default reducer;