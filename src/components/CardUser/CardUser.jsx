import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({ char }) => {
  const { image, name, status, species, origin } = char;
  return (
  <>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status {status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Species {species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {origin.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </>
  );
}

export default CardUser;