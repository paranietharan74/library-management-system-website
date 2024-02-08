import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import UserHome from './Pages/UserHome';
import FineManagement from './Pages/FineManagement';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/fine" element={<FineManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;