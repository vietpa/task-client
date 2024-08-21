'use client';

import { Button, FormControl, Grid, styled, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { authenticate } from '@/app/lib/actions';
import { useFormState } from "react-dom";
import Link from "next/link";
import { redirect } from "next/navigation";

const Root = styled('form')(() => ({
  width: '400px',
  maxWidth: '100%',
}))

const Form = () => {
  const initialState: any = { message: null, errors: {} }
  const [state, formAction] = useFormState(authenticate, initialState);
  useEffect(() => {
    if (state?.access_token) redirect('/tasks');
  }, [state])

  return (
    <Root action={formAction}>
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
          <Link href='/signup'>Register</Link>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Form;