import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backgroundBlendMode: 'darken',
    marginBottom: '1rem'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    marginRight: '1rem',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '0px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    textAlign: 'initial',
    marginLeft: '1rem',
  },
  cardActions: {
    margin: '0 0px 0px 210px',

  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',

  },
});
