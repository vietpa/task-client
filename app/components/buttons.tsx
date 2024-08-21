import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { red } from '@mui/material/colors';

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: `1px solid ${red[200]}`,
  backgroundColor: 'transparent',
  color: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 0,
  '&:hover': {
    border: `1px solid ${red[400]}`,
    backgroundColor: 'transparent',
  },
}));