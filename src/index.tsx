import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apps/App';
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './libs/home/components/Navigater/style.css';
import Footer from './libs/layout/Footer';
import Routes from './apps/routes/Route';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//     
//   </React.StrictMode>
// );
function RootRender(){
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer/>
    </StrictMode>
  );
}
const rootElement = document.getElementById("root");
if(rootElement != null){
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(<RootRender />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
