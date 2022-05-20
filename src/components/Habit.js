import React from 'react'
import Day from './Day'

function Habit({habit}) {
  return (
    <>
      <br />
      <div style={styles.habitContainer}>
        <h1>{habit.title} - {habit.desc}</h1>
        <div style={styles.days}></div>
        {habit.week.map((day, index) => {
            return (<Day day={day} key={index} title={habit.title} />)
        })}
        
      </div>
    </>
  )
}

export default Habit

const styles = {
  habitContainer: {
    width: '80%',
    border: '2px solid coral',
    margin: 'auto',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 25,
  },
  days: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}
