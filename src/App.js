import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Paranie
import AboutPage from './Pages/About';
import ArticleHome from './Pages/ArticleHome';
import PublishArticles from './Pages/PublishArticles';
import MyProfile from './Pages/MyProfile';
import ViewArticle from './Pages/ViewArticle';
import ArticleTag from './Pages/ArticleTag';
import articles from './articles';

// Shobikan
import Login from './Pages/login';
import DetailsFilling from './Pages/DetailsFilling';
import DetailsConfirmation from './Pages/DetailsConfirmation';
import VerifyEmail from './Pages/VerifyEmail';
import VerificationSuccess from './Pages/VerificationSuccess';
import SearchAccount from './Pages/SearchAccount';
import ChangeForgotPassword from './Pages/ChangeForgotPassword';
import VerifyForgotPassword from './Pages/VerifyForgotPassword';

// Mihunan
import UserHome from './Pages/UserHome';
import books from './book';
import UserChat from './Pages/UserChat';
import ViewBook from './Pages/ViewBook';

// Yasothan
import Test from './Pages/Test';
import FineManagement from './Pages/FineManagement';
import UserMessages from './Pages/UserMessages';
import MyBooks from './Pages/MyBooks';
import EditProfile from './Pages/EditProfile';
import SecurityPage from './Pages/SecurityPage';
import Complaint from './Pages/complaint';
import MakeNewComplaint from './Pages/MakeNewComplaint';

function App() {

  return (
    <Router>
      <Routes>
        {/* Paranietharan */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article-home" element={<ArticleHome articles={articles} />} />
        <Route path='/publish-articles' element={<PublishArticles />} />
        <Route path='/article-tag' element={<ArticleTag />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route
          path="/article/:articleId"
          element={<ViewArticle articles={articles} />}
        />

        {/*Shobikan */}
        <Route path="/login" element={<Login />} />
        <Route path='/details-fill' element={<DetailsFilling />} />
        <Route path='/details-confirmation' element={<DetailsConfirmation />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/verification-success' element={<VerificationSuccess />} />
        <Route path='/search-account' element={<SearchAccount />} />
        <Route path='/change-forgot-password' element={<ChangeForgotPassword />} />
        <Route path='/verifyMailForgotPassword' element={<VerifyForgotPassword />} />

        {/* Mihunan */}
        <Route path="/" element={<UserHome books={books} />} />
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

        {/* Lathisana */}
      </Routes>
    </Router>
  );
}

export default App;