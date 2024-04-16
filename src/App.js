import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change BrowserRouter to Router
import AboutPage from './Pages/About';
import ArticleHome from './Pages/ArticleHome';
import PublishArticles from './Pages/PublishArticles';
import React from 'react';
import MyProfile from './Pages/MyProfile';
import ViewArticle from './Pages/ViewArticle';
import ArticleTag from './Pages/ArticleTag';
import articles from './articles';

import Login from './Pages/login';
import DetailsFilling from './Pages/DetailsFilling';
import DetailsConfirmation from './Pages/DetailsConfirmation';
import VerifyEmail from './Pages/VerifyEmail';
import VerificationSuccess from './Pages/VerificationSuccess';
import SearchAccount from './Pages/SearchAccount';
import ChangeForgotPassword from './Pages/ChangeForgotPassword';
import VerifyForgotPassword from './Pages/VerifyForgotPassword';

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
      </Routes>
    </Router>
  );
}

export default App;