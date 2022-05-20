import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Habits from './Habits';
import Addhabit from './Addhabit';
import Page404 from './Page404';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/habits' element={<Habits />} />
          <Route path='/add' element={<Addhabit />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
