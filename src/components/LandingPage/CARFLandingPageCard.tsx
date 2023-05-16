import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 345,
    margin: '0px 16px',
    boxShadow: 'none',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '208px',
    boxShadow:
      '0px 2px 1px -1px rgba(12, 35, 64, 0.04),0px 1px 1px 0px rgba(12, 35, 64, 0.06),0px 1px 3px 0px rgba(12, 35, 64, 0.1)',
  },
  image: {
    width: '100px',
    height: '110px',
  },
  cardActions: { justifyContent: 'flex-start', alignItems: 'flex-end' },
});

type Props = {
  cardImageRoute: any;
  backgroundColor: string;
  cardText: string;
  cardTitle: string;
};

export const CARFLandingPageCard = ({
  cardImageRoute,
  backgroundColor,
  cardText,
  cardTitle,
}: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div
          className={classes.imageWrapper}
          style={{
            backgroundColor: `${backgroundColor}`,
          }}
        >
          <img
            src={cardImageRoute}
            alt={cardTitle}
            height="140"
            title="Tollgate Pre-Requisites"
            className={classes.image}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          <a href="#">Open</a>
        </Button>
      </CardActions>
    </Card>
  );
};
