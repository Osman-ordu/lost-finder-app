import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import Title from './components/title/title';
import Searchbox from './components/searchbox/searchbox';
import ContentCards from './components/cards/contentCards';
// import ContentButtons from './components/buttongroup/contentButtons'
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center p-4">
      <Title/>
      <Searchbox/>
      <ContentCards/>
      {/* <ContentButtons/> */}
      <Footer/>

      
    </div>
  );
}

export default App;
