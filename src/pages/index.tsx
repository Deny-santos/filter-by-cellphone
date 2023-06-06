import React, { useState } from 'react'
import Header from '../components/Header'
import styled from "styled-components"
import MainContent from '../components/MainContent'
import { Filter } from '../context/Filter'
import { FilterType } from '@/context/filterType'

type Props = {}

const App = (props: Props) => {


  const Container = styled.div`
  
  `

  return (
    <Filter>
      <FilterType>
        <Container>
          <Header />
          <MainContent />
        </Container>
      </FilterType>
    </Filter>
  )
}

export default App