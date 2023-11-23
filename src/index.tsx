import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
      path: "/",
      element: <div>dupa</div>
  },
  {
      path: "/ada",
      element: <div>ada</div>
  },
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
          <BrowserRouter basename="/repository-name">
              <App />
          </BrowserRouter>
      </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
