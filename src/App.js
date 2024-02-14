import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route instead of Routes
import Login from './Pages/login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
