import React from 'react'
import { Link } from 'react-router-dom';
// if wrong url is enterd by the user we will display this page
function Page404() {
  return (
    <div style={{textAlign: 'center', marginTop: 50}}>
      <h1>404, Page not found, Please enter correct url or click below button to go to home page</h1>
      <Link to='/'><button style={styles.button}>Go to home</button></Link>
    </div>
  )
}

export default Page404;
const styles = {
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
