import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div style={styles.navbar}>
      <Link to='/' style={styles.link}>
        <span style={styles.habitify}><i className="fa-solid fa-camera-retro"></i> Habitify</span>
      </Link>
    </div>
  )
}

export default Navbar

const styles = {
  navbar: {
    backgroundColor: 'coral',
    fontSize: '2.5rem',
    color: 'white',
    padding: 5
  },
  habitify: {
    marginLeft: 10,
    paddingTop: 5,
    marginBotton: 7,
    paddingBottom: 5,
  },
  link: {
    textDecoration: 'none',
    color: 'white',

  }
}
