import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: '#f5f5f5',
  padding: '20px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
});

const FooterText = styled(Typography)({
  fontSize: '14px',
  textAlign: 'center',
  margin: '0 auto',
  padding: '0 20px',
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: '#1976d2',
  fontWeight: 'bold',
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Phonebook. All rights reserved. Created by{' '}
        <FooterLink
          rel="noreferrer"
          target="_blank"
          href="www.linkedin.com/in/sashazabolotnuy"
        >
          Estarossa1
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;