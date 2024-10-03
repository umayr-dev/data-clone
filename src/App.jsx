import React from "react";
import Header from "./components/header";
import Bannerdata from "./components/banner";
import Advantage from "./components/advantage";
import Courses from "./components/courses";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <main>
        <Bannerdata />,
        <Advantage />,
        <Courses/>
      </main>
    </>
  );
}

export default App;
