import React from "react";

import { useProtectedPage } from '../../Hooks/useProtectedPage';
import { MainContainer } from './styled'

const Error = () => {
  useProtectedPage();
  return (
    <MainContainer>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      </MainContainer>
  )
}

export default Error