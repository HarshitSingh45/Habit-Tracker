import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits, addHabits } from '../actions/habits'
import Habit from './Habit';

function Habits() {
//   const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits);
  // console.log('HABITS : ',habits);
  useEffect(() => {
    dispatch(fetchHabits());
  },[dispatch])
//   const onClickSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addHabits(title));

//   }

  return (
    <div>
      {/* <h2>create habit</h2>
      <form onSubmit={onClickSubmit}>
        <input type="text" value = {title} onChange = {(e) => setTitle(e.target.value)} />
        <input type="submit" value="Submit" />
      </form> */}
      {habits.length === 0 
                ? 
                <>
                <div style={styles.noHabitDiv}>
                <h1 style={styles.nohabit}>No Habits Added yet !!</h1>
                <Link to='/add'>
                    <button style={styles.button}>Add Habit</button>
                </Link>
                </div>
                </> 
                : 
                <>
                    <h1 style={{textAlign: 'center'}}>Your Daily Habits :) </h1>
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
