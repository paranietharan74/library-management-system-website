import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboardHome from './pages/AdminDashboardHome';
import BookManagement from './pages/BookManagement';
import MembershipManagement from './pages/MembershipManagement';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboardHome />} />
          <Route path='/admin-book-management' element={<BookManagement />} />
          <Route path='/membership-management' element={<MembershipManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
