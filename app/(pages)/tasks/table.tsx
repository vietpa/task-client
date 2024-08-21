'use client';

import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import DeleteButton from './buttons';
import { setTasks } from '../../lib/features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector, useAppStore } from '../../lib/hook';

const TaskTable = ({ tasks }: any) => {
  const dispatch = useAppDispatch();
  dispatch(setTasks(tasks));
  const data = useAppSelector((state: any) => state.tasks.value);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="task table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>User</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((task: any) => (
            <TableRow
              key={task.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {task.id}
              </TableCell>
              <TableCell component="th">
                {task.name}
              </TableCell>
              <TableCell component="th">
                {task.content}
              </TableCell>
              <TableCell>{task.userId}</TableCell>
              <TableCell sx={{ minWidth: '130px' }} align='right'>
                <IconButton color="primary" aria-label="edit" href={`/tasks/${task.id}`}>
                  <EditIcon />
                </IconButton>
                <DeleteButton id={task.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TaskTable;