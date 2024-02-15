import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route instead of Routes
import Login from './Pages/login';
import DetailsFilling from './Pages/DetailsFilling';
import DetailsConfirmation from './Pages/DetailsConfirmation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/details-fill' element={<DetailsFilling />} />
          <Route path='/details-confirmation' element={<DetailsConfirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
