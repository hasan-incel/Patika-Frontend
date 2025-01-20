import React from "react";
import Header from "./Components/Header";
import Stats from "./Components/Stats";
import Classes from "./Components/Classes";
import BMI from "./Components/BMI";
import Trainers from "./Components/Trainers";
import Purchase from "./Components/Purchase";
import Review from "./Components/Review";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Stats />
      <Classes />
      <BMI />
      <Trainers />
      <Purchase />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
