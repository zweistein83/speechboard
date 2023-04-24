import { useState } from 'react'

import styled from '@emotion/styled'
import SoundButton from './components/soundButton/SoundButton'

const Container = styled.div`
  display: flex;
 
  width: 100vw;
  //overflow-y: hidden;
  overflow-x: hidden;   
  place-items: center; 
  margin: 30px;
  color: black;
  user-select: none;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 80px;
  width: 800px;  
  overflow-x: hidden;  
  flex-wrap: wrap;
  place-items: flex-start;
`;

const Paginator = styled.div`
  display: flex;
  gap: 60px;
  width: 100vw;
  justify-content: center;
  place-items: center;
  margin-top: 100px;

`;

const PageChangeButton = styled.button`
  display: flex;  
  width: 100px;
  height: 100px;
  font-weight: 900;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
`;

function App() {  

  const voices = speechSynthesis.getVoices();
  const [pageNumber, setPageNumber] = useState(0)
  
  
  const soundButtonData = [
    {emoji:"👍", labelText:"JA", voiceText:"Ja", buttonColor:"green"},
    {emoji:"👎", labelText:"NEI", voiceText:"Nei", buttonColor:"red"},
    {emoji:"🚽", labelText:"Må på do", voiceText:"Eg må på do"},
    {emoji:"🥛", labelText:"Tørst", voiceText:"Eg e tørst"},
    {emoji:"🍲", labelText:"Sulten", voiceText:"Eg e sulten"},
    {emoji:"🚶‍♀️",  labelText:"Gå tur", voiceText:"Eg vil ut å gå"},
    {emoji:"🙂", labelText:"Bra", voiceText:"Det går  bra"},
    {emoji:"😱",  labelText:"Redd", voiceText:"Eg e redd"},
    {emoji:"😡", labelText:"Sint", voiceText:"Eg e sint"},    
    {emoji:"😢", labelText:"Trist", voiceText:"Eg e lei mæ"},        
    {emoji:"🤕", labelText:"Vondt", voiceText:"Det gjør vondt"},
    {emoji:"🤢", labelText:"Kvalm", voiceText:"Eg e kvalm"},
    {emoji:"😩", labelText:"Sliten", voiceText:"Eg e sliten"},
    {emoji:"😴", labelText:"Sove", voiceText:"Eg vil sove"},
    {emoji:"❤️", labelText:"Gla i deg", voiceText:"Gla i dæg!"}]
  
  
  const pageSize = 4;
  const numberOfButtons = soundButtonData.length
  let numberOfPages = Math.floor(numberOfButtons / pageSize)
  let startItem = pageNumber * 4;
  let endItem = Math.min(startItem + 4, numberOfButtons);

  
  return (
   
      <Container>
        { false && <div>
                {voices.map((el, idx)=>(<div key={idx}>{el.name} - {el.lang}</div>))}
            </div>}
            <ButtonContainer>
            {soundButtonData.slice(startItem, endItem).map((sbData, idx)=><SoundButton key={idx+"_"+sbData.emoji} emoji={sbData.emoji} labelText={sbData.labelText} voiceText={sbData.voiceText} buttonColor={sbData.buttonColor} />)}
            </ButtonContainer>
         <Paginator>
          <PageChangeButton disabled={pageNumber <= 0} onClick={()=>{setPageNumber(prev=>prev - 1)}}>{"<"}</PageChangeButton>
          <PageChangeButton disabled={pageNumber >= numberOfPages} onClick={()=>{setPageNumber(prev=>prev + 1)}}>{">"}</PageChangeButton>
         </Paginator>
      </Container>
        
   
  )
}

export default App
