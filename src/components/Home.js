import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <br /> <br />
        <div style={styles.logo}>
            <h1 style={styles.logotitle}>Habitify</h1>
        </div>
        <h1 style={styles.heading}>Habitify - Best App to track down all your habits</h1>
        <div style={styles.desc}>
            <p>Habitify is a free and interactive web application to add and view all your habits, you'll get flexibility to update daily status of your habit at any time</p>
        </div>
        <div style={styles.buttons}>
            <Link to='/add' >
                <button style={styles.button}>Add Habit</button>
            </Link>
            <Link to='/habits' >
                <button style={styles.button}>View Habits</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;

const styles = {
    logo: {
        marginTop: 75,
        width: '20%',
        minHeight: 120,
        border: '3px solid coral',
        textAlign: 'center',
        margin: 'auto',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'coral',
        // norderRadius: 10,

    },
    logotitle: {
        color: 'white',
        // color: 'coral',
        fontSize: '4rem',
        fontWeight: 'bold',
    },
    heading: {
        // marginTop: 170,
        marginTop: 30,
        textAlign: 'center'
    },
    desc: {
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
    },
    buttons: {
        marginTop: 75,
        width: '50%',
        margin: 'auto',
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
