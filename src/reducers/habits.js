import { ADD_HABITS, FETCH_HABITS, UPDATE_STATUS } from "../actions/actionTypes";

// intital state of habits list
const initialHabitState = {
    habits: []
}
// reducer
export default function habits(state = initialHabitState, action){
    // depending upon the action type reducer will update the state
    switch (action.type){
        // fetching habits from the list
        case FETCH_HABITS:
            return state;
        // adding new habit to the list
        case ADD_HABITS:
            return {
                habits: [...state.habits, action.habit]
            };
        // updating the day stus of any particular habit
        case UPDATE_STATUS:
            // first storing the title of all habits in one list and then finding the index of that habit 
            const id = state.habits.map(e => {return e.title}).indexOf(action.title);
            // updating the status of the habit whose id we found above
            state.habits[id].week[action.day-1].status = action.status;
            return state;
        // if no action type matches we pass state itself
        default:
            return state;
    }
 }
