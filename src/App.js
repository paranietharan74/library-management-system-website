import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import UserDashboard from './Pages/UserDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;