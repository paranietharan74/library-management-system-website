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
      articleImage: 'https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      authorDetails: {
        image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
        { id: '1', imgLink: 'https://example.com/avatar1.jpg', author: 'Alice', content: 'Comment 1', timestamp: '2024-02-18T10:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar2.jpg', author: 'Bob', content: 'Comment 2', timestamp: '2024-02-18T11:00:00' },
      ],
      averageRating: 4.5,
    },
    {
      id: '2',
      articleImage: 'https://images.pexels.com/photos/5566664/pexels-photo-5566664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      authorDetails: {
        image: 'https://images.pexels.com/photos/5566664/pexels-photo-5566664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Jane Smith',
        publishedDate: 'February 20, 2024',
      },
      contents: {
        title: 'Sample Article 2',
        tags: ['tag4', 'tag5', 'tag6'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar3.jpg', author: 'Charlie', content: 'Comment 1', timestamp: '2024-02-20T09:45:00' },
        { id: '2', imgLink: 'https://example.com/avatar4.jpg', author: 'David', content: 'Comment 2', timestamp: '2024-02-20T10:15:00' },
      ],
      averageRating: 3.8,
    },
    {
      id: '3',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Emily Johnson',
        publishedDate: 'February 22, 2024',
      },
      contents: {
        title: 'Sample Article 3',
        tags: ['tag7', 'tag8', 'tag9'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar5.jpg', author: 'Emma', content: 'Comment 1', timestamp: '2024-02-22T08:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar6.jpg', author: 'Frank', content: 'Comment 2', timestamp: '2024-02-22T09:00:00' },
      ],
      averageRating: 4.0,
    },
    {
      id: '4',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Michael Brown',
        publishedDate: 'February 24, 2024',
      },
      contents: {
        title: 'Sample Article 4',
        tags: ['tag10', 'tag11', 'tag12'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar7.jpg', author: 'Grace', content: 'Comment 1', timestamp: '2024-02-24T10:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar8.jpg', author: 'Henry', content: 'Comment 2', timestamp: '2024-02-24T11:00:00' },
      ],
      averageRating: 4.2,
    },
    {
      id: '5',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Sarah Lee',
        publishedDate: 'February 26, 2024',
      },
      contents: {
        title: 'Sample Article 5',
        tags: ['tag13', 'tag14', 'tag15'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar9.jpg', author: 'Isabella', content: 'Comment 1', timestamp: '2024-02-26T09:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar10.jpg', author: 'Jack', content: 'Comment 2', timestamp: '2024-02-26T10:00:00' },
      ],
      averageRating: 3.9,
    },
    {
      id: '6',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Liam Wilson',
        publishedDate: 'February 28, 2024',
      },
      contents: {
        title: 'Sample Article 6',
        tags: ['tag16', 'tag17', 'tag18'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar11.jpg', author: 'Katherine', content: 'Comment 1', timestamp: '2024-02-28T11:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar12.jpg', author: 'Liam', content: 'Comment 2', timestamp: '2024-02-28T12:00:00' },
      ],
      averageRating: 4.1,
    },
    {
      id: '7',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Mia Garcia',
        publishedDate: 'March 1, 2024',
      },
      contents: {
        title: 'Sample Article 7',
        tags: ['tag19', 'tag20', 'tag21'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar13.jpg', author: 'Nathan', content: 'Comment 1', timestamp: '2024-03-01T08:45:00' },
        { id: '2', imgLink: 'https://example.com/avatar14.jpg', author: 'Olivia', content: 'Comment 2', timestamp: '2024-03-01T09:15:00' },
      ],
      averageRating: 3.7,
    },
    {
      id: '8',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Ethan Martinez',
        publishedDate: 'March 3, 2024',
      },
      contents: {
        title: 'Sample Article 8',
        tags: ['tag22', 'tag23', 'tag24'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar15.jpg', author: 'Peter', content: 'Comment 1', timestamp: '2024-03-03T10:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar16.jpg', author: 'Queenie', content: 'Comment 2', timestamp: '2024-03-03T11:00:00' },
      ],
      averageRating: 4.3,
    },
    {
      id: '9',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'Noah Anderson',
        publishedDate: 'March 5, 2024',
      },
      contents: {
        title: 'Sample Article 9',
        tags: ['tag25', 'tag26', 'tag27'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar17.jpg', author: 'Robert', content: 'Comment 1', timestamp: '2024-03-05T09:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar18.jpg', author: 'Sophia', content: 'Comment 2', timestamp: '2024-03-05T10:00:00' },
      ],
      averageRating: 4.4,
    },
    {
      id: '10',
      articleImage: 'https://via.placeholder.com/600x400',
      authorDetails: {
        image: 'https://via.placeholder.com/100',
        name: 'William Taylor',
        publishedDate: 'March 7, 2024',
      },
      contents: {
        title: 'Sample Article 10',
        tags: ['tag28', 'tag29', 'tag30'],
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed ut libero vitae nisl aliquam ultricies.',
          'Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis.',
        ],
      },
      comments: [
        { id: '1', imgLink: 'https://example.com/avatar19.jpg', author: 'Thomas', content: 'Comment 1', timestamp: '2024-03-07T10:30:00' },
        { id: '2', imgLink: 'https://example.com/avatar20.jpg', author: 'Ursula', content: 'Comment 2', timestamp: '2024-03-07T11:00:00' },
      ],
      averageRating: 4.6,
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