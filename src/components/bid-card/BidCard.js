import React from 'react';
import './BidCard.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '16px 0'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function RoomButton(props) {
  const { id } = props;
  return (
    <Button size="small">
      <Link to={`/bid-room/${id}`}>Enter bid room</Link>
    </Button>
  );
}

function BidCard({ id }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Current Highest Bid
        </Typography>
        <Typography variant="h5" component="h2">
          $1000
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by tom
        </Typography>
        <Typography variant="body2" component="p">
          04:39 remaining
        </Typography>
      </CardContent>
      <CardActions>
        <RoomButton id={id} />
      </CardActions>
    </Card>
  );
}

export default BidCard;
