import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

function SubmitButton() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <LoadingButton
      size="large"
      style={
        loading
          ? {
              border: 'solid'
            }
          : {}
      }
      onClick={handleSubmit}
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
    >
      <span>Submit</span>
    </LoadingButton>
  );
}

export default SubmitButton;
