import React from "react";
import "./styles/styles.scss";
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
