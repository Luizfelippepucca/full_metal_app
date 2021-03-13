import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {Home} from '@styled-icons/ionicons-solid/Home';
import {StarOfDavid} from '@styled-icons/fa-solid/StarOfDavid';
import {Contact } from '@styled-icons/boxicons-solid/Contact';

import {Link} from 'react-router-dom';

const styleUL = {
    height:'200px',
    
    
}
const animaMenu = keyframes`
  from {
 height:0px;
  }

  to {
   height:${styleUL};
  }
 
`
const Menu = styled.nav`
width:100%;
height:300px;
background-color:transparent;
display flex;
align-items:center;
justify-content:center;
@media(min-width:768px){
    width:60%;
    grid-column-start:1;
    grid-column-end:3;
    margin-left:300px;
   grid-row-start:1;
   margin-top:129px;
  }
  @media(min-width:1024px){
    margin-left:388px;
   }
   @media(min-width:1440px){
    margin-left:565px;
   }

` 
const NameHeader = styled.div`
width:60%;
height:50px;
background-color:transparent;
font-family: 'Do Hyeon', sans-serif;
display:flex;
align-items:center;
justify-content:center;
display:none;
font-size:25px;
color:#590000;
letter-spacing:4px;
text-transform:uppercase;
@media(min-width:1440px){
    display:flex;
    
   }
`
const MenuItem = styled.ul`
width:90%;
height:0px;
background-color: rgba(255,255,255,0.2);
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
backdrop-filter:blur(2px);
border:2px solid transparent;
background-clip:padding-box;
transition: all 0.3s;
animation:${animaMenu} 1s linear;
@media(min-width:1440px){
    flex-direction:row;
    align-items:flex-start;
    flex-wrap:wrap;
   }
` 

const ItensMenu = styled.li`
 width:60%;
 height:50px;
 background-color:transparent;
 font-family: 'Do Hyeon', sans-serif;
 display:flex;
 align-items:center;
 justify-content:center;
 border-bottom: 1px solid  #590000;
 transition:  opacity 0.5s easy ;
 opacity:0.6;
 &:Hover{
    opacity:1;
}
@media(min-width:1440px){
    width:30%;
    border-left: 1px solid  #590000;
    border-bottom: 0px solid  #590000;
    padding-top:20px;
    font-size:22px;
    
}

` 
const TitleMenu = styled.h3`
padding-left:10px;
padding-top:5px;
text-transform:inherit;
opacity:0.6;
color:#590000;
cursor:pointer;
` 
const IconMenu = styled(Home)`
 width:30px;
 opacity:0.7;
 color:#590000;
`
const IconMenu2 = styled(StarOfDavid)`
 width:28px;
 opacity:0.6;
 color:#590000;
`
const IconMenu3 = styled(Contact)`
 width:30px;
 opacity:0.7;
 color:#590000;
 margin-left 15px;
`


const styleLink = {
paddingLeft:'10px',
paddingTop:'5px',
textTransform:'inherit',
opacity:'0.6',
color:'#590000',
cursor:'pointer',
textDecoration:'none'
}
const MenuNav = () => {
    const [Anima,setAnima] = useState(false);
    const animando = !Anima;
    const animationMenu = () =>{
        setTimeout(()=>{
           setAnima(animando);
        },2000);
       }
    return (
        <Menu>
            {Anima === false? 
            <MenuItem onLoad={animationMenu()}>
              
            </MenuItem>:
            <MenuItem style={styleUL} >
                <ItensMenu><IconMenu></IconMenu><TitleMenu><Link to='/' style={styleLink}>Home</Link></TitleMenu></ItensMenu>
                <ItensMenu><IconMenu2></IconMenu2><TitleMenu><Link to='/About' style={styleLink}>About</Link></TitleMenu></ItensMenu>
                <ItensMenu><IconMenu3></IconMenu3><TitleMenu><Link to='/Contact' style={styleLink}>Contact</Link></TitleMenu></ItensMenu>
                <NameHeader>Alphonse Elric</NameHeader>
            </MenuItem>}
           
        </Menu>
    )
}

export default MenuNav;