import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <Container>
      <>레이아웃 테스트</>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
`;
