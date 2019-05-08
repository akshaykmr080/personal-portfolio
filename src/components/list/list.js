import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ModifiedList extends React.Component {

  render() {
    const { classes, relatedCourses } = this.props;
    const { items, heading} = relatedCourses;
    console.log(items)
    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">{heading}</ListSubheader>}
        className={classes.root}
      >
      {items.map((item) => {
          return (
                <ListItem button key={item.id}>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={item.text} />
                </ListItem>
          )
      })}
      </List>
    );
  }
}

ModifiedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModifiedList);
