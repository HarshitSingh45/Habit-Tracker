import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Habits from './Habits';
import Addhabit from './Addhabit';
import Page404 from './Page404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* setting up rotes */}
      <Router>
        {/* navbar component component will be common to all pages */}
        <Navbar />
        <Routes>
          {/* home page */}
          <Route path='/' element={<Home />} />
          {/* page to display all habits  */}
          <Route path='/habits' element={<Habits />} />
          {/* page to add habit */}
          <Route path='/add' element={<Addhabit />} />
          {/* if wrong url is entered by the user */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
      {/* componet to display notification */}
      <ToastContainer />
    </div>
  );
}

export default App;
