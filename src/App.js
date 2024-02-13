import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import FineManagement from './Pages/FineManagement';
import UserMessages from './Pages/UserMessages';
import UserHome from './Pages/UserHome';
import MyBooks from './Pages/MyBooks';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/message" element={<UserMessages />} />
          <Route path="/fine" element={<FineManagement />} />
          <Route path='/mybooks' element={<MyBooks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;