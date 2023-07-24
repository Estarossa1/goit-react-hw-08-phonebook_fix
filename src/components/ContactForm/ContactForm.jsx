import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getContacts, getError } from '../../redux/contacts/selectors';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  const handleInputChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && number.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        toast.error(`${name} is already in contacts.`);
        return;
      }

      if (error) {
        toast.error('Failed to load contacts. Please try again later.');
        return;
      }

      dispatch(addContact({ name, number }));
      toast.success(`${name} added to contacts.`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box
        sx={{
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            Failed to load contacts. Please try again later.
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            type="text"
            name="name"
            label="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required
            fullWidth
            margin="normal"
          />

          <TextField
            type="tel"
            name="number"
            label="Number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            required
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" sx={{ width: '40%' }}>
            Add Contact
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;