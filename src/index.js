import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StartRating';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["Terrible", "Bad", "OK", "Good", "Excellent"]}/>
    <StarRating maxRating={10} color="red" size={48} defaultRating={3}/>
  </React.StrictMode>
);


