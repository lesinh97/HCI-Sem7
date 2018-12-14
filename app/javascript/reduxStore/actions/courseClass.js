import * as actionTypes from './actionTypes';
// import axios from 'axios';

export const updateCourses = (coursesClass) => {
    return {
        type: actionTypes.COURSES_UPDATE_CLASS,
        newCoursesClass: coursesClass   
    }
}