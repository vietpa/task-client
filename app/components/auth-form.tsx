'use client';

import { Button, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import Link from "next/link";

const AuthForm = ({ state, action, login }: any) => {
  return (
    <>
      <form action={action}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl sx={{ marginBottom: '1rem' }} fullWidth={true}>
              <TextField name="username" label="Username" error={state?.errors?.username} helperText={state?.errors?.username ? 'Required' : ''} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ marginBottom: '1rem' }} fullWidth={true}>
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                error={state?.errors?.password} helperText={state?.errors?.password ? 'Required' : ''}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" sx={{ width: '100%' }}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href={login ? '/signup' : '/login'}>{login ? 'Register' : 'Login'}</Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default AuthForm;