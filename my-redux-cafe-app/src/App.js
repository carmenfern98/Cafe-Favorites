/** @jsxImportSource @emotion/react */
import './App.css';
import CafeCard from './components/CafeCard';
import FavoritesList from './components/FavoritesList';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import styled from '@emotion/styled';
import logo from './img/logo.PNG'

const Container= styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
padding: 20px;
`

function App() {
  const dispatch = useDispatch();
  const cafes = useSelector(state => state.cafe.cafes);


  return (
    <div className="App">
      <header className="App-header">
        <img src = {logo}/>
      </header>
      <h1>おひとり様グルメのお気に入りのカフェ</h1>
      <Container>
      <FavoritesList />
      </Container>
      <h2>全てのカフェ</h2>
      <Container>
        {cafes.map(cafe => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </Container>
    </div>
  );
}

export default App;
