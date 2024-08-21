import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Backdrop open={true} sx={{ display: 'flex' }}>
      <CircularProgress />
    </Backdrop>
  )
}

export default Loading;