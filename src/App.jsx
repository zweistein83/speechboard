import { useState } from 'react'

import styled from '@emotion/styled'
import SoundButton from './components/soundButton/SoundButton'

const Container = styled.div`
  display: flex;
`

function App() {
  

  return (
    <>
      <Container>
        <SoundButton/>
      </Container>
        
    </>
  )
}

export default App
