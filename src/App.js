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
import Complaint from './Pages/complaint';
import MakeNewComplaint from './Pages/MakeNewComplaint';

// Yasothan
import Test from './Pages/Test';
import FineManagement from './Pages/FineManagement';
import UserMessages from './Pages/UserMessages';
import MyBooks from './Pages/MyBooks';
import EditProfile from './Pages/EditProfile';
import SecurityPage from './Pages/SecurityPage';
import Notifications from './Pages/Notifications';
import LendingHistory from './Pages/LendingHistory';
import FineHistory from './Pages/FineHistory';

// Lathisana
import AdminDashboardHome from './Pages/AdminDashboardHome';
import BookManagement from './Pages/BookManagement';
import MembershipManagement from './Pages/MembershipManagement';
import LibrarianChat from './Pages/LibrarianChat';
import ArticleManagement from './Pages/ArticleManagement';
import TermsAndPolicies from './Pages/TermsAndPolicies';
import AdminFineManagement from './Pages/AdminFineManagement';
import AdminSettings from './Pages/AdminSettings';
import AdminProfileManagement from './Pages/AdminProfileManagement';
import AdminNotificationControl from './Pages/AdminNotificationControl';

function App() {

  return (
    <Router>
      <Routes>
        {/* Paranietharan */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article-home" element={<ArticleHome articles={articles} />} />
        <Route path='/publish-articles' element={<PublishArticles />} />
        <Route path='/article-tag' element={<ArticleTag />} />
        <Route path='/my-profile' element={<MyProfile articles={articles}/>} />
        <Route
          path="/article/:articleId"
          element={<ViewArticle articles={articles} />}
        />

        {/*Shobikan */}~
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
        {/*Librarian Chat */}
        <Route path='/librarian-chat' element={<LibrarianChat />} />



        {/* Yasothan */}
        <Route path="/message" element={<UserMessages />} />
        <Route path="/fine" element={<FineManagement />} />
        <Route path='/mybooks' element={<MyBooks />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/security' element={<SecurityPage />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/terms' element={<TermsAndPolicies />} />
        <Route path='/lending-history' element={<LendingHistory />} />
        <Route path='/fine-history' element={<FineHistory />} />



        {/* Lathisana */}
        <Route path="/admin" element={<AdminDashboardHome />} />
        <Route path='/admin-book-management' element={<BookManagement />} />
        <Route path='/membership-management' element={<MembershipManagement />} />
        <Route path='/librarian-article-management' element={<ArticleManagement articles={articles}/>} />
        <Route path='/admin-fine-management' element={<AdminFineManagement />} />
        <Route path='/admin-notification-control' element={<AdminNotificationControl />} />

        {/* TO DO */}
        <Route path='/admin-settings' element={<AdminSettings />} />
        <Route path='/admin-profile-management' element={<AdminProfileManagement />} />

        {/* Sample code for test */}
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;