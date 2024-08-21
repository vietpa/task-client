import { deleteTask } from '@/app/lib/actions';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { removeTask } from '../../lib/features/tasks/tasksSlice';
import { useAppDispatch } from '../../lib/hook';

const DeleteButton = ({ id }: { id: string }) => {
  const initialState: any = { message: null, errors: {} }
  const deleteTaskWithId: any = deleteTask.bind(null, id);
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.id) dispatch(removeTask(state));
  }, [state])
  return (
    <form action={formAction} style={{ display: 'inline-block' }}>
      <IconButton type="submit" color="error" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </form>
  );
}

export default DeleteButton;