import React from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
       <Main/> 
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
