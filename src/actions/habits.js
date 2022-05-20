import { ADD_HABITS, FETCH_HABITS, UPDATE_STATUS } from "./actionTypes";

// action to fetch habits
export const fetchHabits = () => {
    // sending to reducer
    return {
        type: FETCH_HABITS,
    }
}

// updatestatus action , when user wants to change the stus of any particular day
export const updateStatus = (day, status, title) => {
    // updating status
    if(status === "NONE"){
        status = "DONE"
    }else if(status === "DONE"){
        status = "NOT DONE"
    }else{
        status = "DONE"
    }
    // sending to reducer
    return {
        type: UPDATE_STATUS,
        day,
        status,
        title
    }
}
// when user adds new habit we send default data to reducer to store it into the reducer
export const addHabits = (title, desc) => {
    // sending to reducer
    return {
        type: ADD_HABITS,
        // sending title and description as sent byt he user
        habit: {
            title,
            desc,
        // by default all week day's status is NONE
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