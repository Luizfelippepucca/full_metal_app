import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {Home} from '@styled-icons/ionicons-solid/Home';
import {StarOfDavid} from '@styled-icons/fa-solid/StarOfDavid';
import {Contact } from '@styled-icons/boxicons-solid/Contact';

const styleUL = {
    height:'200px',
    
}
const animaMenu = keyframes`
  from {
 height:0px;
  }

  to {
   height:${styleUL};
  }`

const Menu = styled.nav`
width:100%;
height:400px;
background-color:transparent;
display flex;
align-items:center;
justify-content:center;
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
transition: all 0.5s;
animation:${animaMenu} 1s linear;
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
            <MenuItem style={styleUL}>
                <ItensMenu><IconMenu></IconMenu><TitleMenu>Home</TitleMenu></ItensMenu>
                <ItensMenu><IconMenu2></IconMenu2><TitleMenu>About</TitleMenu></ItensMenu>
                <ItensMenu><IconMenu3></IconMenu3><TitleMenu>Contact</TitleMenu></ItensMenu>
            </MenuItem>}
           
        </Menu>
    )
}

export default MenuNav;