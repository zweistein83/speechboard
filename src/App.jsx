import { useState } from 'react'

import styled from '@emotion/styled'
import SoundButton from './components/soundButton/SoundButton'

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100vw;
  overflow-y: hidden;
  flex-wrap: wrap; 
  place-items: flex-start; 
  margin: 30px;
  color: black;
`

function App() {  

  const voices = speechSynthesis.getVoices();

  return (
    <>
      <Container>
      <div>
                {voices.map((el, idx)=>(<div key={idx}>{el.name} - {el.lang}</div>))}
            </div>
        <SoundButton emoji={"👍"} labelText={"JA"} voiceText={"Ja"} buttonColor={"green"}/>
        <SoundButton emoji={"👎"} labelText={"NEI"} voiceText={"Nei"} buttonColor={"red"}/>
        <SoundButton emoji={"🚽"} labelText={"Må på do"} voiceText={"Eg må på do"}/>
        <SoundButton emoji={"🥛"} labelText={"Tørst"} voiceText={"Eg e tørst"}/>
        <SoundButton emoji={"🍲"} labelText={"Sulten"} voiceText={"Eg e sulten"}/>
        <SoundButton emoji={"🚶‍♀️"} labelText={"Gå tur"} voiceText={"Eg vil ut å gå"}/>
        <SoundButton emoji={"🙂"} labelText={"Bra"} voiceText={"Det går  bra"}/>
        <SoundButton emoji={"😱"} labelText={"Redd"} voiceText={"Eg e redd"}/>
        <SoundButton emoji={"😡"} labelText={"Sint"} voiceText={"Eg e sint"}/>       
        <SoundButton emoji={"😢"} labelText={"Trist"} voiceText={"Eg e lei mæ"}/>        
        <SoundButton emoji={"🤕"} labelText={"Vondt"} voiceText={"Det gjør vondt"}/>
        <SoundButton emoji={"🤢"} labelText={"Kvalm"} voiceText={"Eg e kvalm"}/>
        <SoundButton emoji={"😩"} labelText={"Sliten"} voiceText={"Eg e sliten"}/>
        <SoundButton emoji={"😴"} labelText={"Sove"} voiceText={"Eg vil sove"}/>
        <SoundButton emoji={"❤️"} labelText={"Gla i deg"} voiceText={"Gla i dæg!"}/> 
      </Container>
        
    </>
  )
}

export default App
