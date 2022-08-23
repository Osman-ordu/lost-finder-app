import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, { useState } from 'react';
import Title from './components/title/title';
import Searchbox from './components/searchbox/searchbox';
// import ContentButtons from './components/buttongroup/contentButtons'
import Footer from './components/footer/footer';
import CardContainer from './components/cards/cardContainer';
import Main from './components/main/main';


function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App d-flex flex-column align-items-center p-4">
      <Title />
      <Searchbox setSearch= { setSearch } />
      <CardContainer search={  search } />
      <Main/>
      <Footer />


    </div>
  );
}

export default App;
