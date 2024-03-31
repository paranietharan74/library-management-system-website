import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change BrowserRouter to Router
import AboutPage from './Pages/About';
import ArticleHome from './Pages/ArticleHome';
import PublishArticles from './Pages/PublishArticles';
import React from 'react';
import ArticleView from './Components/ArticleView';
import MyProfile from './Pages/MyProfile';
import ViewArticle from './Pages/ViewArticle';
import ArticleTag from './Pages/ArticleTag';

function App() {
  const articles = [
    {
      id: '1',
      articleImage: 'https://example.com/article1.jpg',
      authorDetails: {
        image: 'https://example.com/author1.jpg',
        name: 'John Doe',
        publishedDate: 'February 18, 2024',
      },
      contents: {
        title: 'Sample Article 1',
        tags: ['tag1', 'tag2', 'tag3'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', text: 'Comment 1', author: 'Alice' },
        { id: '2', text: 'Comment 2', author: 'Bob' },
      ],
      averageRating: 4.5,
    },
  ];

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