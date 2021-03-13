import React from 'react';
import styled, {keyframes} from 'styled-components';
import Img from './images/alphonse.jpg';
import Splash from './images/splash.png';
import MenuNav from './componentes/menuNav';
import {Fire} from '@styled-icons/icomoon/Fire';
import {Water} from '@styled-icons/entypo/Water';
import {Wind} from '@styled-icons/boxicons-regular/Wind';
import {Plant} from '@styled-icons/remix-fill/Plant';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomeNav from './componentes/Home';
import AboutNav from './componentes/About';
import ContactNav from './componentes/Contact';

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
height:400px;
background-image:  url(${Img}),  url(${Splash});
object-fit:cover;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
transition: left 1s;
background-blend-mode:luminosity;
animation: ${slide} 1s linear ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media(min-width:768px){
  display:grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows:200px 200px ;
  grid-gap:10px;
}  
@media(min-width:1024px){
 background-position-y:inherit;
}
` 
const TitleHeader = styled.h1`
width:90%;
height:100px;
color: #590000;
background-color: rgba(255,255,255,0.2);
font-family: 'Do Hyeon', sans-serif;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
margin-top:30px;
text-transform:uppercase;
letter-spacing:2px;
@media(min-width:768px){
  width:75%;
  grid-column-start:1;
  grid-column-end:2;
  margin-left:40px;
  grid-row-start:1;
}
`
const DescriptionHeader = styled.div`
width:280px;
height:200px;
margin-top:-80px;
margin-left:40px;
display:none;
background-color: rgba(255,255,255,0.2);
font-family: 'Do Hyeon', sans-serif;
color:white;
font-size:18px;
text-align:center;
@media(min-width:768px){
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
}
@media(min-width:1024px){
  width:375px;
  justify-content:center;
 }
 @media(min-width:1440px){
  width:529px;
  font-size:20px;
 }

`
const DivIconHeader = styled.div`
width:100%;
height:100px;
display:none;
background-color: transparent;
@media(min-width:768px){
  display:flex;
  flex-direction:rows;
  align-items:center;
  justify-content:space-evenly;
  margin-top:30px;
  margin-left:-58px;
  
}
`
const IconFire = styled(Fire)`
width:40px;
color:white;
`
const IconWater = styled(Water)`
width:40px;
color:white;
`
const IconWind = styled(Wind)`
width:42px;
color:white;
`
const IconPlant = styled(Plant)`
width:42px;
color:white;
`
function App() {
  return (
    <Router>
      <div className="App">
      <Header>
        <TitleHeader>full Metal</TitleHeader>
        <MenuNav></MenuNav>
        <DescriptionHeader>
        O mangá de Fullmetal Alchemist vendeu aproximadamente 64 milhões de cópias no mundo. Em duas pesquisas realizadas no website oficial da TV Asahi, o anime foi votado como o anime mais popular de todos os tempos no Japão.
        </DescriptionHeader>
        <DivIconHeader>
          <IconFire/>
          <IconWater/>
          <IconWind/>
          <IconPlant/>
        </DivIconHeader>
      </Header>
      <Switch>
        <Route exact path='/'><HomeNav></HomeNav></Route>
        <Route  path='/About'><AboutNav></AboutNav></Route>
        <Route path='/Contact'><ContactNav></ContactNav></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
