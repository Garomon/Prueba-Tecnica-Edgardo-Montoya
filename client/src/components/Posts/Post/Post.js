import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch } from 'react-redux';
import moment from 'moment';


import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const classes = useStyles();


  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="caption">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2} name="edit">
          <CardActions className={classes.cardActions}>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button size="small" color="inherit" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteOutlineIcon fontSize="medium" />
              </Button>
            )}
          </CardActions>
        </div>
      )}
      <Typography className={classes.title} gutterBottom variant="h6" component="h6">{post.title.split('_').splice(0, 9).join(' ')}{post.title.length > 30 ? '...' : null}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 11).join(' ')}...</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
