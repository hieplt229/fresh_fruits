import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import About2 from "./components/About/About2";
import About3 from "./components/About/About3";
import Contacts from "./contacts/Contacts";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <Products />
        <About />
        <About2 />
        <About3 />
        <Contacts />
      </div>
    </main>
  );
};

export default App;
