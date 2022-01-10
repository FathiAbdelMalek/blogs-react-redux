import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducers";
import Nav from "./components/global/Nav";
import Blogs from "./components/blogs";
import Blog from "./components/blog";
import reportWebVitals from "./reportWebVitals";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector("main")
);
reportWebVitals();
