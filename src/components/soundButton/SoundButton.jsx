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
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "nb-NO"
    speech.pitch = 2
    speech.rate = 1
    speech.text = voiceText;    
    
    
    
    console.log(voices);
    return (
        <Container buttonColor={buttonColor} onClick={()=>{speechSynthesis.speak(speech)}}>
            <Emoji>{emoji}</Emoji>
                <Label>{labelText}</Label>

        </Container>
    )

}
export default SoundButton
