import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Typography variant="h3" align="center">
        Sorry, there is not such page
      </Typography>
    </div>
  );
};

export default NotFoundPage;
