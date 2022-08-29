import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import { App } from './routes/App';
// import { About } from './routes/About';
import { Splash } from './routes/Splash';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/play" element={<App />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
