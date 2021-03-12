import React from 'react';
import styled from 'styled-components';
import imgRodape from '../images/imgRodape.jpg';
import {LinkedinSquare}from '@styled-icons/boxicons-logos/LinkedinSquare';
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare';

const RodapeSection = styled.footer`
width:100%;
height:400px;
background-image: url(${imgRodape});
background-size:cover;
background-repeat:no-repeat;
padding-top:10px;
display:flex;
align-items:center;
justify-content:center;

`
const DivRodape = styled.div`
width:90%;
height:350px;
backdrop-filter:blur(1px);
background-clip:padding-box;
background-color: rgba(84, 5, 5,0.5);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const TitleRodape = styled.h2`
width:100%;
height:40px;
font-family: 'Do Hyeon', sans-serif;
color: rgba(255,255,255,0.7);
text-align:center;
padding-top:10px;
letter-spacing:2px;

` 
const SubTitleRodape = styled.h3`
width:100%;
height:40px;
font-family: 'Do Hyeon', sans-serif;
color: rgba(255,255,255,0.7);
text-align:center;
letter-spacing:3px;
font-size:30px;
padding-bottom:10px;
`
const DivIcons = styled.div`
width:250px;
height:80px;
display:flex;
align-tems:center;
justify-content:space-around;
margin-top:10px;
`
const IconLinkedin = styled(LinkedinSquare)`
width:43px;
color:rgba(255,255,255,0.7);
&:hover{-webkit-box-reflect: below -45px linear-gradient(transparent,#000)};
`
const IconGit = styled(GithubSquare)`
width:32px;
color:rgba(255,255,255,0.7);
&:hover{-webkit-box-reflect: below -45px linear-gradient(transparent,#000)};
`
const IconFace = styled(FacebookSquare)`
width:41px;
color:rgba(255,255,255,0.7);
&:hover{-webkit-box-reflect: below -45px linear-gradient(transparent,#000)};
`
const TittleFinalRodape =  styled.h4`
width:100%;
height:40px;
font-family: 'Do Hyeon', sans-serif;
color: rgba(255,255,255,0.7);
text-align:center;
letter-spacing:4px;
font-size:25px;
margin-top:20px;

`


const Rodape = ()=>{
  return(
      <RodapeSection>
        <DivRodape>
          <TitleRodape>Full Metal </TitleRodape>
          <SubTitleRodape>Alchimist</SubTitleRodape>
          <DivIcons>
              <IconLinkedin></IconLinkedin>
              <IconGit></IconGit>
              <IconFace></IconFace>
          </DivIcons>
          <TittleFinalRodape>Luiz Felippe</TittleFinalRodape>
        </DivRodape>
       
      </RodapeSection>
     
  )
}

export default Rodape;