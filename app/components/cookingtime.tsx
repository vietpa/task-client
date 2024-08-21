'use client';

import React from 'react';
import { Grid, styled, SvgIcon } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Root = styled('div')(() => ({
  margin: '3rem 0',
  [`& label`]: {
    fontSize: '1.2rem',
    letterSpacing: 3,
    fontWeight: 600,
    lineHeight: 2
  }
}))

const CookingTime = ({ data }: any) => {
  return (
    <Root>
      <Grid container spacing={2}>
        <Grid item fontSize={'30px'} display={'flex'}>
          <SvgIcon fontSize="inherit" sx={{ marginTop: '.5rem' }}>
            <AccessTimeIcon />
          </SvgIcon>
        </Grid>
        <Grid item>
          <label>PREP</label>
          <div>{data.prep}</div>
        </Grid>
        <Grid item>
          <label>BAKE</label>
          <div>{data.bake}</div>
        </Grid>
        <Grid item>
          <label>TOTAL</label>
          <div>{data.total}</div>
        </Grid>
      </Grid>
    </Root>
  )
}

export default CookingTime;