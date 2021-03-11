import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

const style = {
    height:'200px',
    
}
const animaMenu = keyframes`
  from {
 height:0px;
  }

  to {
   height:${style};
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
backdrop-filter:blur(2px);
border:2px solid transparent;
background-clip:padding-box;
transition: all 0.4s;
animation:${animaMenu} 1s linear;
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
            {Anima === false? <MenuItem onLoad={animationMenu()}></MenuItem>:<MenuItem style={style}></MenuItem>}
           
        </Menu>
    )
}

export default MenuNav;