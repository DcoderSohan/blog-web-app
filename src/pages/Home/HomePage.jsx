import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "../Container/Hero";
import Article from "../Container/Article";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Article />
      </MainLayout>
    </div>
  );
};

export default HomePage;
