import React from 'react';
import styled from 'styled-components';
import Top from 'components/layout/top';

export default function Home() {
  return (
    <ContainerSC>
      <Top />
    </ContainerSC>
  );
}

const ContainerSC = styled('div')`
  width: 100vw;
  height: 100vh;
  background: blueviolet;
`;
