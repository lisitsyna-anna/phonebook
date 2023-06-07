import { Container, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px 0',
        marginTop: 'auto',
      }}
    >
      <Container style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://github.com/lisitsyna-anna">
            Created by Anna Lisitsyna
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
