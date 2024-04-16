import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import FineManagement from './Pages/FineManagement';
import UserMessages from './Pages/UserMessages';
import UserHome from './Pages/UserHome';
import MyBooks from './Pages/MyBooks';
import EditProfile from './Pages/EditProfile';

import Test from './Pages/Test';
import SecurityPage from './Pages/SecurityPage';
import Complaint from './Pages/complaint';
import MakeNewComplaint from './Pages/MakeNewComplaint';
import ViewBook from './Pages/ViewBook';

import books from './book';
import UserChat from './Pages/UserChat';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Mihunan */}
          <Route path="/" element={<UserHome books={books}/>} />
          <Route path='/complaint' element={<Complaint />} />
          <Route path='/make-new-complaint' element={<MakeNewComplaint />} />
          <Route path="/book/:id" element={<ViewBook books={books} />} />
          <Route path='/user-chat' element={<UserChat />} />

          {/* Yasothan */}
          <Route path="/message" element={<UserMessages />} />
          <Route path="/fine" element={<FineManagement />} />
          <Route path='/mybooks' element={<MyBooks />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/security' element={<SecurityPage />} />

          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;