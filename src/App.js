import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboardHome from './pages/AdminDashboardHome';
import BookManagement from './pages/BookManagement';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboardHome />} />
          <Route path='/admin-book-management' element={<BookManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
