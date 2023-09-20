import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </LayoutWrapper>
  );
};
const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
`;
const WrapperOutlet = styled.div`
  padding: 20px;
  padding-left: 270px;
`;
