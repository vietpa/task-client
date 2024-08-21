'use client';

import { Button, FormControl, Grid, styled, TextField } from "@mui/material";
import React from "react";
import { updateTask } from '@/app/lib/actions';
import { useFormState } from "react-dom";

const Form = ({ task }: any) => {
  const initialState: any = { message: null, errors: {} }
  const updateTaskWithId: any = updateTask.bind(null, task.id);
  const [state, formAction] = useFormState(updateTaskWithId, initialState);

  return (
    <form action={formAction}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl sx={{ marginBottom: '1rem' }} fullWidth={true}>
            <TextField name="name" label="name" defaultValue={task.name} error={state?.errors?.name} helperText={state?.errors?.name ? 'Required' : ''} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ marginBottom: '1rem' }} fullWidth={true}>
            <TextField
              name="content"
              label="content"
              defaultValue={task.content}
              multiline
              rows={4}
              error={state?.errors?.content} helperText={state?.errors?.content ? 'Required' : ''}
            />
          </FormControl>
        </Grid>
        <Button type="submit" variant="contained" size="large" sx={{ width: '100%' }}>
          Update
        </Button>
      </Grid>
    </form>
  )
}

export default Form;