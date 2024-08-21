'use client';

import React from 'react';
import { styled } from '@mui/material';

const Root = styled('nav')(() => ({
  [`& ul`]: {
    listStyle: 'none',
    display: 'flex',

    [`& li`]: {
      textTransform: 'uppercase',
      fontWeight: 600,
    }
  }
}))

interface Breadcrumb {
  label: string;
}

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <Root aria-label="Breadcrumb" className="mb-6 block">
      <ul>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.label}
          >
            {breadcrumb.label}
            {index < breadcrumbs.length - 1 ? (
              <span style={{ padding: '0 1rem', color: 'red' }}>&gt;</span>
            ) : null}
          </li>
        ))}
      </ul>
    </Root>
  );
}

export default Breadcrumbs;
