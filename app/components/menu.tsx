'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material';
import { red } from '@mui/material/colors';
import clsx from 'clsx';

const Root: any = styled('div')(() => ({
  [`& .menu`]: {
    listStyle: 'none',
    display: 'flex',
    paddingLeft: '2rem',
    fontSize: '1.4rem',
  },

  [`& .menu-main`]: {
    paddingLeft: 0,
    fontSize: '1.6rem',
    [`& .menu-link`]: {
      textTransform: 'uppercase',
      padding: '.5rem 0',
      margin: '0 3rem',
      borderBottom: '2px solid transparent'
    },
    [`& .activated`]: {
      borderBottom: `2px solid ${red[400]}`
    },
    [`& .menu-link:hover`]: {
      borderBottom: `2px solid ${red[400]}`
    }
  },

  [`& .menu-link`]: {
    textTransform: 'uppercase',
    padding: '1rem 0',
    margin: '0 1rem',
    borderBottom: '2px solid transparent'
  }
}))

const Menu = ({ menu, menuClass }: { menu: any, menuClass: string }) => {
  const pathname = usePathname();
  return (
    <Root>
      <ul className={menuClass}>
        {
          menu.map((item: any) => (
            <li key={item.name}>
              <Link
                key={item.name}
                href={item.href}
                className={clsx('menu-link',
                  {
                    'activated': pathname.includes(item.name)
                  }
                )}
              >
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </Root>
  )
}

export default Menu;