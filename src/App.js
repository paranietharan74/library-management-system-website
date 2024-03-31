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

function App() {
  return (
    <Router> {/* Use Router instead of BrowserRouter */}
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article-home" element={<ArticleHome articles={articles} />} />
        <Route path='/publish-articles' element={<PublishArticles />} />
        <Route path='/article-tag' element={<ArticleTag />} /> {/* Corrected from Router to Route */}
        <Route path='/my-profile' element={<MyProfile />} />
        <Route
          path="/article/:articleId"
          element={<ViewArticle articles={articles} />}
        />
      </Routes>
    </Router>
  );
}

export default App;