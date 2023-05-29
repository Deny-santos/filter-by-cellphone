import React, { useState } from 'react'
import Header from '../components/Header'
import styled from "styled-components"
import MainContent from '../components/MainContent'
import { Filter } from '../context/Filter'

type Props = {}

const App = (props: Props) => {


  const Container = styled.div`
  
  `

  return (
    <Filter>
      <Container>
        <Header/>
        <MainContent/>
      </Container>
    </Filter>
  )
}

export default App