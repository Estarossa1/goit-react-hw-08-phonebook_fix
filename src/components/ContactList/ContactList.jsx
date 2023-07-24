import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { getStatusFilter } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return <CircularProgress />; 
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        <SearchIcon sx={{ marginRight: '10px' }} />
        Contact List
      </Typography>
      <List>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress size={20} />
          <Typography variant="body2" sx={{ marginLeft: '10px' }}>
            Updating list...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ContactList;