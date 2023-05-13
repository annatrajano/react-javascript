import Footer from "components/Footer";
import Header from "components/Header";
import Favorite from "pages/Favorite";
import Home from "pages/Home";
import React from "react";
import Container from "components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorite />} />
      </Routes>

      </Container>
      <Footer />
    </BrowserRouter>
  );
}
