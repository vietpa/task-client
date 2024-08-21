'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@/app/components/menu';
import { APP_CONSTANTS } from '@/app/globals/common';
import { Box, Container, styled } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { orange } from '@mui/material/colors';

const Root = styled('div')(() => ({
  width: '100%',
  fontSize: '1.4rem',

  [`& .sub-header`]: {
    backgroundColor: orange[50],
  }
}))

const Header = () => {
  const menu = APP_CONSTANTS.MENU;
  const pathname = usePathname();
  const paths = pathname.split('/');

  const activedMenu = menu.find((item: any) => item.name === paths[1]);
  const submenu = activedMenu.children || [];

  return (
    <Root>
      <AppBar position="static" color="transparent" elevation={0} sx={{ height: '60px' }}>
        <Container maxWidth="lg" sx={{ width: '100%', display: 'flex' }}>
          <Image
            src='/logo.png'
            width={100}
            height={100}
            className='logo'
            alt='Logo'
          />
          <Box height={60} flexGrow={1} display="flex" alignItems="center">
            <Menu menu={menu} menuClass="menu menu-main" />
          </Box>
        </Container>
      </AppBar>
      <AppBar position="static" color="transparent" elevation={0} className='sub-header'>
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          <Box paddingLeft={'100px'} height={60} flexGrow={1} display="flex" alignItems="center">
            <Menu menu={submenu} menuClass="menu" />
          </Box>
        </Container>
      </AppBar>
    </Root>
  )
}

export default Header;