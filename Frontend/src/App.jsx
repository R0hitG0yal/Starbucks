/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import { JoinNow } from "./components/JoinNow";
import { Directions } from "./components/Directions";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <JoinNow/>
      <Directions/>
    </>
  );
}

export default App;
