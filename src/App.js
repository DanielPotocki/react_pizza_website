import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import { GlobalStyle } from "./globalStyles";
import { productData, productDataTwo } from "./components/Products/data";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <Feature />
      <Products
        heading="Our desserts, where calories doesnt matter... 😏"
        data={productDataTwo}
      />
      <Footer />
    </Router>
  );
}

export default App;
