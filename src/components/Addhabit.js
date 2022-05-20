import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits, addHabits } from '../actions/habits'
import { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Addhabit() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isSubmit, setIssubmit] = useState(false);  
  const dispatch = useDispatch();
  const onClickSubmit = (e) => {
    e.preventDefault();
    dispatch(addHabits(title, desc));
    setTitle('');
    setDesc('');
    setIssubmit(true);
    return toast.success("Habit Added Successfully");

  }
  return (
    <div>
        {isSubmit ? 
            <>
            <Navigate to='/habits'></Navigate>
            </> 
            : 
            <>
                <div style={styles.quote}>
                    <h2><i className="fa-solid fa-quote-left"></i>  Successful people are simply those with successful habits  <i className="fa-solid fa-quote-right"></i></h2>
                    <h3> - Brian Tracy</h3>
                    <h2 style={styles.heading}>Start Building Good Habits</h2>
                    <div style={styles.form}>
                        <form onSubmit={onClickSubmit}>
                            <label>Habit Title :</label> <br />
                            <input type="text" style={styles.input} placeholder='Enter Habit title' required value = {title} onChange = {(e) => setTitle(e.target.value)} /> <br />
                            <label>Habit Description : </label> <br />
                            <input type="text" style={styles.input} placeholder='Enter Habit description' required value = {desc} onChange = {(e) => setDesc(e.target.value)} /> <br />
                            <input type="submit" value="Submit" style={styles.button} />
                        </form>
                    </div> 
                </div>
            </>
        }
      {/* <ToastContainer /> */}
    </div>
  )
}

export default Addhabit;

const styles = {
    quote: {
        color: 'grey',
        marginTop: 70,
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: 50,
    },
    heading: {
        paddingTop: 50,
        color: 'coral'
    },
    form: {
        width: '75%',
        minHeight: 200,
        border: '2px solid coral',
        borderRadius: 12,
        color: 'black',
        marginLeft: 100,
        fontSize: '1.2rem',
        paddingTop: 25,
        paddingBottom: 25,

        
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
    },
    input: {
        width: '80%',
        margin: 'auto',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
      }
}
