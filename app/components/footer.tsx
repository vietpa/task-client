'use client';

import React from 'react';
import { Grid, styled, SvgIcon } from '@mui/material';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import { PrimaryButton } from '@/app/components/buttons';

const Root = styled('div')(() => ({
  margin: '3rem 0',
  [`& label`]: {
    fontSize: '1.2rem',
    letterSpacing: 3,
    fontWeight: 600,
    lineHeight: 2
  }
}))

const Footer = () => {

  return (
    <Root>
      <Root>
        <Grid container spacing={2} wrap="nowrap">
          <Grid item fontSize={'30px'} display={'flex'}>
            <SvgIcon fontSize="inherit" sx={{marginTop: '.5rem'}}>
              <SettingsInputSvideoIcon />
            </SvgIcon>
          </Grid>
          <Grid item>
            <label>YIELD</label>
            <div>1 loaf, 12 generous servings</div>
          </Grid>
          <Grid item xs="auto">
            <PrimaryButton variant="outlined" sx={{ fontSize: '2rem' }}>
              <SvgIcon fontSize="inherit">
                <AddIcon />
              </SvgIcon>
              <span style={{ fontSize: '1.2rem', letterSpacing: 1.5, marginLeft: '.5rem' }}>SAVE RECIPE</span>
            </PrimaryButton>
          </Grid>
          <Grid item>
            <PrimaryButton variant="outlined" sx={{ fontSize: '2rem' }}>
              <SvgIcon fontSize="inherit">
                <PrintIcon />
              </SvgIcon>
              <span style={{ fontSize: '1.2rem', letterSpacing: 1.5, marginLeft: '.5rem' }}>PRINT</span>
            </PrimaryButton>
          </Grid>
        </Grid>
      </Root>
    </Root>
  )
}

export default Footer;