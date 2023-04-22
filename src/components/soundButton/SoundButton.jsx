import styled from '@emotion/styled'

const Container = styled.button`
    width: 150px;
    height: 150px;
    background-color: ${props => props.buttonColor};
    
`

const Emoji = styled.div`
    font-size: 2rem;    
`
const Label = styled.div`
    font-size: 1rem;
` 



const SoundButton =({emoji, labelText, voiceText, buttonColor})=>{
    const voices = speechSynthesis.getVoices();
    console.log(voices)
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "no"
    speech.pitch = 2
    speech.rate = 1
    speech.text = voiceText;    
    
    

    const no_voice = voices.find((_voice)=>_voice.lang.includes("nb-NO"));
    if (no_voice){
        speech.voice = no_voice
        speech.lang = no_voice.lang
        console.log(no_voice)
    }

    
    
    
    console.log(voices);
    return (
        <Container buttonColor={buttonColor} onClick={()=>{speechSynthesis.speak(speech)}}> 
            <div>{no_voice?.name || "" - no_voice?.lang || ""}</div>           
            <Emoji>{emoji}</Emoji>
            <Label>{labelText}</Label>

        </Container>
    )

}
export default SoundButton
