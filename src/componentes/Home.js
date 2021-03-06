import React from 'react';
import styled from 'styled-components';
import imgEd from  '../images/eduard.jpeg';
import imgScar from '../images/scar.png';
import imgRoy from '../images/roy.png';
import imgMira from '../images/mira.jpg';
import imgLing from '../images/ling.jpg';
import imgLan from '../images/lanFan.jpg';
import Rodape from './rodape.js';

const SectionHome = styled.section`
 width:100%;
 height:auto;
 background-color:transparent;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 @media(min-width:768px){
   display:grid;
   grid-template-columns: 2fr 2fr;
   grid-template-rows:300px 300px 300px;
   grid-row-gap:20px;
   padding-top:20px;
   padding-bottom:20px;
 }
 @media(min-width:1440px){
  grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows:300px 300px ;
 }
 
` 
const DivAboveCard = styled.div`
width: 250px;
height:150px;
background-color: rgba(255,255,255,0.2);
backdrop-filter:blur(10px);
transition: all 0.5s;
display:flex;
align-items:center;
justify-content:center;
@media(min-width:768px){
  width:300px;
}


`
const PCardName = styled.div`
font-family: 'Do Hyeon', sans-serif;
color:#590000;
text-transform:uppercase;
transition: all 0.5s;
font-size:20px;

`
const PCardInfos = styled.div`
font-family: 'Do Hyeon', sans-serif;
color:#590000;
text-transform:uppercase;
transition: all 0.5s;
font-size:15px;
text-align:center;
padding-top:10px;
`
const DivBelowCard = styled.div`
width: 250px;
height:150px;
background-color: rgba(255,255,255,0.2);
backdrop-filter:blur(10px);
transition: all 0.5s;
font-family: 'Do Hyeon', sans-serif;
color:#590000;
@media(min-width:768px){
  width:300px;
}

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
 &:hover ${PCardName}{
  opacity:0;
}
@media(min-width:768px){
  width:300px;
  margin-left:40px;
}
@media(min-width:1024px){
  margin-left:100px;
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
 &:hover ${PCardName}{
  opacity:0;
}
@media(min-width:768px){
  width:300px;
}
@media(min-width:1024px){
  margin-left:100px;
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
 &:hover ${PCardName}{
  opacity:0;
}
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
 @media(min-width:768px){
  width:300px;
  margin-left:40px;
}
@media(min-width:1024px){
  margin-left:100px;
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
 &:hover ${PCardName}{
  opacity:0;
}
 
 &:hover ${DivBelowCard}{
   margin-top:300px;
 }
 @media(min-width:768px){
  width:300px;
}
@media(min-width:1024px){
  margin-left:100px;
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
 &:hover ${PCardName}{
  opacity:0;
}
@media(min-width:768px){
  width:300px;
  margin-left:40px;
}
@media(min-width:1024px){
  margin-left:100px;
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
 &:hover ${PCardName}{
  opacity:0;
}
@media(min-width:768px){
  width:300px;
}
@media(min-width:1024px){
  margin-left:100px;
 }
` 

const HomeNav = ()=>{
  
  return (
    <>
      <SectionHome>
          <CardHome className='data-anima'>
            <DivAboveCard>
              <PCardName>Edward Elric</PCardName>
            </DivAboveCard> 
            <DivBelowCard>
              <PCardInfos>
              O mais jovem alquimista federal eleito pelo estado militar do pa??s, motivo pelo qual pouco depois recebeu o t??tulo de "Fullmetal Alchemist" pelo chefe militar, King Bradley.
              </PCardInfos>
            </DivBelowCard>
          </CardHome>
          <CardHome2 className='data-anima'>
            <DivAboveCard>
              <PCardName>Scar</PCardName>
            </DivAboveCard>
              <DivBelowCard>
                <PCardInfos>
                Foi um dos sobreviventes do Massacre de Ishval e desde ent??o ele busca vingan??a contra o ex??rcito. O apelido de Scar vem da grande cicatriz em formato de X em sua testa e ostenta uma tatuagem alqu??mica consp??cua.
                </PCardInfos>
              </DivBelowCard>
          </CardHome2>
          <CardHome3 className='data-anima'>
            <DivAboveCard>
              <PCardName>Roy Mustang</PCardName>
            </DivAboveCard> 
            <DivBelowCard>
              <PCardInfos>
                Um Alquimista Federal com a alcunha de "Flame Alchemist". General da Brigada. Usa uma luva especial feita de tecido inflam??vel, e manipula as chamas livremente usando alquimia.
             </PCardInfos>
            </DivBelowCard>
          </CardHome3>
          <CardHome4 className='data-anima'>
            <DivAboveCard>
              <PCardName>Olivier Mira Armistrong</PCardName>
            </DivAboveCard> 
            <DivBelowCard>
              <PCardInfos>
              Tamb??m conhecida como Major General Armstrong ?? a principal herdeira da ilustre fam??lia Armstrong, a comandante encarregada da prote????o da fronteira norte de Amestris no Forte Briggs 
              </PCardInfos>
            </DivBelowCard>
          </CardHome4>
          <CardHome5 className='data-anima'>
            <DivAboveCard>
              <PCardName>Ling Yao</PCardName>
            </DivAboveCard> 
            <DivBelowCard>
              <PCardInfos>
              ?? o d??cimo segundo pr??ncipe herdeiro do Imp??rio de Xing e l??der do cl?? Yao. Ling se aventura na perigosa jornada entre Xing e Amestris em busca do segredo da imortalidade
              </PCardInfos>
            </DivBelowCard>
            </CardHome5>
          <CardHome6 ClassName='data-anima'>
            <DivAboveCard>
              <PCardName>Lan Fan</PCardName>
            </DivAboveCard> 
            <DivBelowCard>
              <PCardInfos>
              ?? uma retentora do Cl?? Yao do Imp??rio Xing , guarda-costas pessoal do Pr??ncipe Ling Yao e neto do guarda-costas s??nior de Ling, Fu . Ela ?? ferozmente leal ao seu pr??ncipe
              </PCardInfos>
            </DivBelowCard>
            </CardHome6>
      </SectionHome>
      <Rodape></Rodape>
     </> 
  )
}

export default HomeNav;