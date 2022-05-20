import { ADD_HABITS, FETCH_HABITS, UPDATE_STATUS } from "../actions/actionTypes";

const initialHabitState = {
    habits: []
}
export default function habits(state = initialHabitState, action){
    switch (action.type){
        case FETCH_HABITS:
            return state;
        case ADD_HABITS:
            return {
                habits: [...state.habits, action.habit]
            };
        case UPDATE_STATUS:
            const id = state.habits.map(e => {return e.title}).indexOf(action.title);
            state.habits[id].week[action.day-1].status = action.status;
            return state;
        default:
            return state;
    }
 }
