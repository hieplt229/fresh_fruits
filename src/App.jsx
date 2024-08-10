import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banners/Banner";
import Contacts from "./contacts/Contacts";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <Products />
        <Banner />
        <Contacts />
      </div>
    </main>
  );
};

export default App;
