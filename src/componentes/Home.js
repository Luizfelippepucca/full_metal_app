import React from 'react';
import styled from 'styled-components';
import imgEd from  '../images/eduard.jpeg';
import imgScar from '../images/scar.png';
import imgRoy from '../images/roy.png';
import imgMira from '../images/mira.jpg';
import imgLing from '../images/ling.jpg';
import imgLan from '../images/lanFan.jpg';

const SectionHome = styled.section`
 width:100%;
 height:auto;
 background-color:transparent;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 
` 
const DivAboveCard = styled.div`
width: 250px;
height:150px;
background-color: rgba(255,255,255,0.2);
backdrop-filter:blur(10px);
transition: all 0.5s;
`
const DivBelowCard = styled.div`
width: 250px;
height:150px;
background-color: rgba(255,255,255,0.2);
backdrop-filter:blur(10px);
transition: all 0.5s;
`

const CardHome = styled.div`
 width: 250px;
 height:300px;
 margin: 10px;
 background-image:url(${imgEd});
 transition: all 0.5s;
 overflow-y:hidden;
 background-size:cover;
 background-repeat:no-repaet;
 &:hover ${DivAboveCard}{
    height:0px;
 }
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
` 

const CardHome2 = styled.div`
 width: 250px;
 height:300px;
 margin: 10px;
 background-image:url(${imgScar});
 transition: all 0.5s;
 overflow-y:hidden;
 background-size:cover;
 background-repeat:no-repaet;
 &:hover ${DivAboveCard}{
    height:0px;
 }
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
` 
const CardHome3 = styled.div`
 width: 250px;
 height:300px;
 margin: 10px;
 background-image:url(${imgRoy});
 transition: all 0.5s;
 overflow-y:hidden;
 background-size:cover;
 background-repeat:no-repaet;
 &:hover ${DivAboveCard}{
    height:0px;
 }
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
` 
const CardHome4 = styled.div`
 width: 250px;
 height:300px;
 margin: 10px;
 background-image:url(${imgMira});
 transition: all 0.5s;
 overflow-y:hidden;
 background-size:cover;
 background-repeat:no-repaet;
 &:hover ${DivAboveCard}{
    height:0px;
 }
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
` 
const CardHome5 = styled.div`
 width: 250px;
 height:300px;
 margin: 10px;
 background-image:url(${imgLing});
 transition: all 0.5s;
 overflow-y:hidden;
 background-size:cover;
 background-repeat:no-repaet;
 &:hover ${DivAboveCard}{
    height:0px;
 }
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
` 
const CardHome6 = styled.div`
 width: 250px;
 height:300px;
 margin: 10px;
 background-image:url(${imgLan});
 transition: all 0.5s;
 overflow-y:hidden;
 background-size:cover;
 background-repeat:no-repaet;
 &:hover ${DivAboveCard}{
    height:0px;
 }
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
` 
const HomeNav = ()=>{
  return (
      <SectionHome>
          <CardHome><DivAboveCard></DivAboveCard> <DivBelowCard></DivBelowCard></CardHome>
          <CardHome2><DivAboveCard></DivAboveCard> <DivBelowCard></DivBelowCard></CardHome2>
          <CardHome3><DivAboveCard></DivAboveCard> <DivBelowCard></DivBelowCard></CardHome3>
          <CardHome4><DivAboveCard></DivAboveCard> <DivBelowCard></DivBelowCard></CardHome4>
          <CardHome5><DivAboveCard></DivAboveCard> <DivBelowCard></DivBelowCard></CardHome5>
          <CardHome6><DivAboveCard></DivAboveCard> <DivBelowCard></DivBelowCard></CardHome6>
      </SectionHome>
  )
}

export default HomeNav;