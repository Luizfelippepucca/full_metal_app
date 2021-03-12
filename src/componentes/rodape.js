import React from 'react';
import styled from 'styled-components';
import imgRodape from '../images/imgRodape.jpg';
import {LinkedinSquare}from '@styled-icons/boxicons-logos/LinkedinSquare';
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare';

const RodapeSection = styled.section`
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
justify-content:flex-start;
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
width:50%;
height:80px;
border-bottom: 1px solid  rgba(255,255,255,0.5);
display:flex;
align-tems:center;
justify-content:space-around;
margin-top:10px;
`
const IconLinkedin = styled(LinkedinSquare)`
width:43px;
color:rgba(255,255,255,0.7);
`
const IconGit = styled(GithubSquare)`
width:32px;
color:rgba(255,255,255,0.7);
`
const IconFace = styled(FacebookSquare)`
width:41px;
color:rgba(255,255,255,0.7);
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
        </DivRodape>
      </RodapeSection>
     
  )
}

export default Rodape;