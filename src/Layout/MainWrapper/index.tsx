import React from 'react';
import NavBar from '../../components/globals/NavBar';

interface IMainWrapper {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: IMainWrapper) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default MainWrapper;
