import React from "react";
import Hero from "../components/Hero";
import Item from "../components/Item";
import Category from "../components/Category";
import Cta from "../components/Cta";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Cta />
      <Item />
    </div>
  );
}

export default Home;
