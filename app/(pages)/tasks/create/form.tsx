'use client';

import { Button, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import { createTask } from '@/app/lib/actions';
import { useFormState } from "react-dom";

const Form = () => {
  const initialState: any = { message: null, errors: {} }
  const [state, formAction] = useFormState(createTask, initialState);

  return (
    <form action={formAction}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl sx={{ marginBottom: '1rem' }} fullWidth={true}>
            <TextField name="name" label="name" error={state?.errors?.name} helperText={state?.errors?.name ? 'Required' : ''} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ marginBottom: '1rem' }} fullWidth={true}>
            <TextField
              name="content"
              label="content"
              multiline
              rows={4}
              error={state?.errors?.content} helperText={state?.errors?.content ? 'Required' : ''}
            />
          </FormControl>
        </Grid>
        <Button type="submit" variant="contained" size="large" sx={{ width: '100%' }}>
          Create
        </Button>
      </Grid>
    </form>
  )
}

export default Form;