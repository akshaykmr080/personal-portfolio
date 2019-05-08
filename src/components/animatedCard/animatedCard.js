import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Motion, spring} from 'react-motion';
import Chip from 'material-ui/Chip';
import Button from '@material-ui/core/Button';
import './animatedCard.css';

const styles = theme => {
    let widthOfDevice = 400;
    if(window.innerWidth <= 500) {
        widthOfDevice = 300
    }
    return {
        card: {
            width: widthOfDevice,
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        actions: {
            display: "flex",
            justifyContent: "space-between"
        },
        avatar: {
            backgroundColor: red[500]
        },
        margin: {
            margin: theme.spacing.unit,
        }
    }
};

class AnimatedCard extends React.Component {

  render() {
    const {  
        active, 
        initial, 
        title, 
        subTitle,
        imageLocation,
        isLiked,
        id,
        projectDescription,
        rotated
    } = this.props.project;
    const classes = this.props.classes;
    return (
        <Motion style={{ x: spring(active ? 1 : 0.3), y: spring(active ? 1 : 0.9), rotateFront: spring(rotated ? 180 : 0) }}>
            {({ x, y, rotateFront }) => {
               return <div className="AnimatedCard" 
                        onClick={() => this.props.onClick(id)} 
                        style={{ opacity: `${x}`, transform: `scale(${y})` }}>
                        
                        <div className="card-side" style={{transform: `rotateY(${rotateFront}deg)` }}>
                            <Card className="card" >
                                <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {initial}
                                    </Avatar>
                                }
                                title={title}
                                subheader={subTitle}
                                />
                                <CardMedia
                                className={classes.media}
                                image={imageLocation}
                                title="Paella dish"
                                />
                                <Divider />
                                <CardContent>
                                    <List component="nav">
                                        {projectDescription.map(desc => {
                                            return (<ListItem button>
                                                        <ListItemText primary={desc} />
                                                    </ListItem>)
                                        })}
                                    </List>
                                    
                                
                                </CardContent>
                                <CardActions className={classes.actions} disableActionSpacing>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon nativeColor={isLiked? "#ef9a9a": "disabled"} onClick={(e) => this.props.likeClicked(e, id)}/>
                                    </IconButton>
                                    <IconButton
                                        onClick={(e) => this.props.handleShowMore(id, e)}
                                    >
                                    	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>								
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="card-side card-side--back" style={{transform: `rotateY(${rotateFront-180}deg)` }}>
                            <Card className={classes.card}>
                                <CardHeader title="Languages and Frameworks used"/>
                                <Divider />
                                <CardContent>
                                    <div className="timeline-entries">
                                        <div className="timeline-entry-chip">
                                        <Chip>Angular 2</Chip>
                                        </div>
                                        <div className="timeline-entry-chip">
                                        <Chip>Docker</Chip>
                                        </div>
                                        <div className="timeline-entry-chip">
                                        <Chip>Jenkins</Chip>
                                        </div>
                                        <div className="timeline-entry-chip">
                                        <Chip>LESS</Chip>
                                        </div>
                                        <div className="timeline-entry-chip">
                                        <Chip>Java Spring</Chip>
                                        </div>
                                        <div className="timeline-entry-chip">
                                        <Chip>Foundation, Bootstrap</Chip>
                                        </div>
                                        <div className="timeline-entry-chip">
                                        <Chip>Confluence, JIRA</Chip>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{padding: '2rem', textAlign: 'center'}}>
                                        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                                            View Demo
                                        </Button>
                                        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                                            Github
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardActions className={classes.actions} disableActionSpacing>
                                    <IconButton
                                        onClick={(e) => this.props.handleShowMore(id, e)}
                                    >
                                    	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg>								
                                    </IconButton>
                                </CardActions>
                            </Card>
                    </div>
                      </div>
                }
            }
        </Motion>
    );
  }
}

AnimatedCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AnimatedCard);
