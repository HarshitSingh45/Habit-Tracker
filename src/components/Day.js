import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateStatus } from '../actions/habits';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Day({day, title}) {
    const [change, setChange] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(updateStatus(day.day, day.status, title));
        day.status === 'DONE'
         ? toast.success(`Status Of Day ${day.day} Changed To Done`) 
         : toast.error(`Status Of Day ${day.day} Changed To Not Done`);
        
        setChange(!change);
    }  
  return (
    <div style={styles.day}> 
      <br />
      <span>Day {day.day}</span>  <br /> <br />
      <span onClick={handleClick}>
        {day.status === 'NONE' 
                ? 
                <>
                  <i style={styles.pending} className="fa-solid fa-circle-plus"></i>
                </> 
                : 
                day.status === 'DONE' 
                            ? 
                            <><i style={styles.check} className="fa-solid fa-circle-check"></i></> 
                            : 
                            <> <i style={styles.uncheck} className="fa-solid fa-circle-xmark"></i></>
          }
        </span>
    </div>
  )
}

export default Day;

const styles = {
  day: {
    display: 'inline-block',
    width: '10%',
    height: 120,
    border: '2px solid coral',
    marginRight: 13,
    marginBottom: 15,
    borderRadius: 10,
  },
  check: {
    color: '#4caf50',
    fontSize: '1.4rem',
  },
  uncheck: {
    color: 'red',
    fontSize: '1.4rem',
  },
  pending: {
    color: '#12c9d0',
    fontSize: '1.4rem',
  }
}
