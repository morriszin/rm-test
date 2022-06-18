import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const images = [
  {
    author: 'nobody@flickr.com ("creativeccfred")',
    link: 'https://www.flickr.com/photos/ccfred/52154384740/',
    media: {
      m: 'https://live.staticflickr.com/65535/52154384740_4113dff9db_m.jpg',
    },
    date_taken: '2022-06-16T19:29:36-08:00',
    tags: 'vbs kids calvary 2022',
  },
  {
    author: 'nobody@flickr.com ("creativeccfred")',
    link: 'https://www.flickr.com/photos/ccfred/52153889306/',
    media: {
      m: 'https://live.staticflickr.com/65535/52153889306_4327d8b739_m.jpg',
    },
    date_taken: '2022-06-16T19:32:12-08:00',
    tags: 'vbs kids calvary 2022',
  },
  {
    author: 'nobody@flickr.com ("creativeccfred")',
    link: 'https://www.flickr.com/photos/ccfred/52153889881/',
    media: {
      m: 'https://live.staticflickr.com/65535/52153889881_a8ee4d84a4_m.jpg',
    },
    date_taken: '2022-06-16T19:19:38-08:00',
    tags: 'vbs kids calvary 2022',
  },
  {
    author: 'nobody@flickr.com ("becklectic")',
    link: 'https://www.flickr.com/photos/becklectic/52152244190/',
    media: {
      m: 'https://live.staticflickr.com/65535/52152244190_1fbebe81bd_m.jpg',
    },
    date_taken: '2022-05-23T13:43:15-08:00',
    tags: 'vbs kids calvary 2022',
  },
];

const state = {
  searchData: {
    image: images[0],
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App {...state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
