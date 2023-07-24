import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { ModalContainer, ModalContent, ButtonGroup as CustomButtonGroup } from './DeleteConfirmation.styled';
import { Button as MuiButton } from '@mui/material';

const ButtonGroup = styled(CustomButtonGroup)({
  justifyContent: 'flex-end',
});

const Button = styled(MuiButton)({
  marginLeft: '10px',
});

const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    if (deleteContact) {
      toast.success(`${contact.name} deleted`);
    }
    onCancel();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Typography variant="body1">Are you sure you want to delete this contact?</Typography>
        <ButtonGroup>
          <Button variant="contained" color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteConfirmation;