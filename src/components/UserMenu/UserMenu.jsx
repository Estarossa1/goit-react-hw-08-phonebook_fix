import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';

const UserMenuContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

const UserName = styled(Typography)({
  marginRight: '10px',
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <Avatar sx={{ width: 32, height: 32, borderRadius: '50%' }} />
      <UserName>{user.name}</UserName>
      <Button variant="outlined" onClick={onLogout} endIcon={<LogoutIcon />}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;