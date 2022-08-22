import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, { useState } from 'react';
import Title from './components/title/title';
import Searchbox from './components/searchbox/searchbox';
import ContentCards from './components/cards/contentCards';
// import ContentButtons from './components/buttongroup/contentButtons'
import Footer from './components/footer/footer';


function App() {
  const [userData, setUserData] = useState("");

  return (
    <div className="App d-flex flex-column align-items-center p-4">
      <Title/>
      <Searchbox setUserData={ setUserData }/>
      <ContentCards userData={ userData }/>
      {/* <ContentButtons/> */}
      <Footer />


    </div>
  );
}

export default App;
