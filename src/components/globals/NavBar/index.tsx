import { Title } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItemsList = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
];

const NavBar = () => {
  return (
    <nav className='flex gap-4 justify-center p-3 m-0 bg-gray-200'>
      {NavItemsList?.map((item, index) => (
        <NavItems
          title={item.title}
          href={item.to}
          key={item.title + index}
        />
      ))}
    </nav>
  );
};

export default NavBar;

interface INavItems {
  title: string;
  href: string;
}

export const NavItems = ({ title, href }: INavItems) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      isActive
        ? 'text-gray-900 no-underline'
        : 'text-gray-500 no-underline hover:text-gray-900'
    }
  >
    <Title
      order={3}
      className='text-base'
    >
      {title}
    </Title>
  </NavLink>
);
