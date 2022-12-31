// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Header />                                                                                                                                                                                     
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Body from "./Body"
import Content from "./Content"
import Content1 from "./Content1"
import ForBusiness from "./ForBusiness"
import Footer from "./Footer"
import './index.css';

ReactDOM.render(
           <div><Header />
                 <Body />
                 <Content />
                 <Content1 />
                 <ForBusiness />
                 <Footer />
           </div>
,document.getElementById("root"))
