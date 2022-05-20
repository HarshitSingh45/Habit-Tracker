import { ADD_HABITS, FETCH_HABITS, UPDATE_STATUS } from "./actionTypes";

export const fetchHabits = () => {
    return {
        type: FETCH_HABITS,
    }
}
export const updateStatus = (day, status, title) => {
    if(status === "NONE"){
        status = "DONE"
    }else if(status === "DONE"){
        status = "NOT DONE"
    }else{
        status = "DONE"
    }
    return {
        type: UPDATE_STATUS,
        day,
        status,
        title
    }
}
export const addHabits = (title, desc) => {
    return {
        type: ADD_HABITS,
        habit: {
            title,
            desc,
        week : [
            {
                day: 1,
                status: "NONE"
            },
            {
                day: 2,
                status: "NONE"
            },
            {
                day: 3,
                status: "NONE"
            },
            {
                day: 4,
                status: "NONE"
            },
            {
                day: 5,
                status: "NONE"
            },
            {
                day: 6,
                status: "NONE"
            },
            {
                day: 7,
                status: "NONE"
            },
        ]
        }
    }
}