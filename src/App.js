import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import FineManagement from './Pages/FineManagement';
import UserMessages from './Pages/UserMessages';
import UserHome from './Pages/UserHome';
import MyBooks from './Pages/MyBooks';
import Profile from './Pages/Profile';

import Test from './Pages/Test';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserHome />} />

          {/* Yasothan */}
          <Route path="/message" element={<UserMessages />} />
          <Route path="/fine" element={<FineManagement />} />
          <Route path='/mybooks' element={<MyBooks />} />
          
          <Route path='/profile' element={<Profile />} />

          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;