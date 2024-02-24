import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboardHome from './pages/AdminDashboardHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboardHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
