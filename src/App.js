import React from 'react';
import styled, {keyframes} from 'styled-components';
import Img from './images/alphonse.jpg';
import Splash from './images/splash.png';
import MenuNav from './componentes/menuNav';



const slide = keyframes`
  from {
   opacity:0;
   margin-left:-400px;
  }

  to {
    opacity:1;
    margin-left:0;
  }
`

const Header = styled.header`
width:100%;
max-width:800px;
height:400px;
background-image:  url(${Img}),  url(${Splash});
object-fit:cover;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
transition: left 1s;
background-blend-mode:luminosity;
animation: ${slide} 1s linear ;
` 


function App() {
  return (
    <div className="App">
     <Header>
       <MenuNav></MenuNav>
     </Header>
    </div>
  );
}

export default App;
