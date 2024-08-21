import * as React from 'react';
import TaskTable from './table';
import { getTasks } from '../../lib/data';
import { Button } from '@mui/material';

const Page = async () => {
  const tasks = await getTasks() || []
  return (
    <div style={{ width: '100%' }}>
      <h1>Tasks</h1>
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <Button variant="contained" href="/tasks/create">Create</Button>
      </div>
      <TaskTable tasks={tasks} />
    </div>
  )
}

export default Page;