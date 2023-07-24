import React, { useState } from 'react';
import DeleteConfirmation from 'components/ContactItem/DeleteConfirmation/DeleteConfirmation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <Box sx={{ marginBottom: '10px', display: 'flex' }}>
      <Box sx={{ flex: '1', display: 'flex', alignItems: 'center' }}>
        <PersonIcon sx={{ marginRight: '5px' }} />
        <Typography variant="h6">{contact.name}</Typography>
      </Box>
      <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PhoneIcon sx={{ marginRight: '5px' }} />
        <Typography variant="body1">{contact.number}</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteClick}
          style={{ position: 'relative' }}
        >
          Delete
        </Button>
      </Box>

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </Box>
  );
};

export default ContactItem;