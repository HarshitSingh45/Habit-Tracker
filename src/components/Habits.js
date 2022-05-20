import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits, addHabits } from '../actions/habits'
import Habit from './Habit';

// habit component will contain all the habits 
function Habits() {
  // disptavh to dispatch an action
  const dispatch = useDispatch();
  // whenever habits state is change it will be changed here to 
  const habits = useSelector((state) => state.habits.habits);

  useEffect(() => {
    // dispatching an action to fetch all habits from the state
    dispatch(fetchHabits());
  },[dispatch])

  return (
    <div>
      {habits.length === 0 
                ? 
                <>
                {/* if no habits are added */}
                <div style={styles.noHabitDiv}>
                <h1 style={styles.nohabit}>No Habits Added yet !!</h1>
                {/* button to add new hbait */}
                <Link to='/add'>
                    <button style={styles.button}>Add Habit</button>
                </Link>
                </div>
                </> 
                : 
                <>
                    {/* if state contains habits */}
                    <h1 style={{textAlign: 'center'}}>Your Daily Habits :) </h1>
                    {/* rendering all Habit component */}
                    {habits.map((habit, index) => {
                        return (
                        <Habit habit={habit} key={index}/>
                        )
                    })}
                </>
       }
      
    </div>
  )
}

export default Habits;

const styles = {
    noHabitDiv: {
        textAlign: 'center'
    },
    nohabit: {
        textAlign: 'center',
        
    },
    button: {
        marginRight: 20,
        marginTop: 10,
        border: 0,
        padding: 5,
        cursor: 'pointer',
        fontSize: '1.4rem',
        backgroundColor: 'coral',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10,
    }
}
