import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/About';
import ArticleHome from './Pages/ArticleHome';
import PublishArticles from './Pages/PublishArticles';
import ArticleTag from './Pages/ArticelTag';
import ViewArticle from './Pages/ViewArticle';
import MyProfile from './Pages/MyProfile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Paranietharan */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article-home" element={<ArticleHome />} />
          <Route path='/publish-articles' element={<PublishArticles />} />
          <Route path='/article-tag' element={<ArticleTag />} />
          <Route path='/article-view' element={<ViewArticle />} />
          <Route path='/my-profile' element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
