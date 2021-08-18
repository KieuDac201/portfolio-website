import { useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default App;
