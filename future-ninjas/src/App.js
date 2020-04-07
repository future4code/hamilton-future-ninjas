import React from 'react';
import styled from 'styled-components'

import Home from './components/Home/Home';



function App() {
  return (
    <Conatiner >
      <Home />
    </Conatiner >
  );
}

const Conatiner = styled.div`
max-width: 100vw;
height: 100vh;
`


export default App;

