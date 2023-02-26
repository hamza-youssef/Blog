import React from "react";
import {
  Typography,
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core/";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import blogImageLogo from "../../Assets/blogLogo.gif";

import { upvoteBlogPosts, removeBlogPosts , downvoteBlogPosts ,editBlogPosts } from "../../actions/blogPosts";
import useStyles from "./styles";

import { styled } from '@mui/material/styles';

import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DefaultImage from '../../Assets/blogLogo.png'
import { ArrowDownward } from "@material-ui/icons";
import { Link } from "react-router-dom";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function RecipeReviewCard({ post, setCurrentId }) {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
     const blogPostStyles = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
    

{/* New Cards */}




<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.title}
          </Avatar>
        }
        action={

          <Link to={post._id}>
            <EditIcon/>
          </Link>
        }
        title={post.creator} 
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.fileUpload || DefaultImage}
        alt="img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Typography  className={blogPostStyles.titleSection}
          gutterBottom
          variant="h5"
          component="h2"  >

          {post.title}
          </Typography>
    
        {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button
            size="small"
            color="primary"
            onClick={() => dispatch(upvoteBlogPosts(post._id))}
          >
            <ArrowUpwardIcon fontSize="small" /> {post.upvote}{" "}
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(downvoteBlogPosts(post._id))}
          >
            <ArrowDownward fontSize="small" />
          </Button>
          
        <IconButton aria-label="share"  onClick={() => dispatch(removeBlogPosts(post._id))}>
        <DeleteIcon fontSize="big" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  


    </>
  );
      
};


