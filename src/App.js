import React from "react";

import pivots from "./pivots.json";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="px-5 md:px-10 pt-2">
      <Header></Header>

      <section class="pt-16 flex flex-wrap">
        {pivots.map((company) => (
          <Card company={company}></Card>
        ))}
      </section>

      <Footer></Footer>
    </div>
  );
}

export default App;
