import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route instead of Routes
import Login from './Pages/login';
import DetailsFilling from './Pages/DetailsFilling';
import DetailsConfirmation from './Pages/DetailsConfirmation';
import VerifyEmail from './Pages/VerifyEmail';
import VerificationSuccess from './Pages/VerificationSuccess';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/details-fill' element={<DetailsFilling />} />
          <Route path='/details-confirmation' element={<DetailsConfirmation />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/verification-success' element={<VerificationSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
