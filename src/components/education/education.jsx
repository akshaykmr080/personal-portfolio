import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import List from '../list/list';
import './education.css';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 10,
    display: "inline-block"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose, place, duration } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="p">{place}</Typography>
        <Typography variant="p">{duration}</Typography>
      </div>
      
      
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

const ModalContent = (props) =>{
    const { uniData, handleClose } = props
    return (
        <div>
            <DialogTitle id="customized-dialog-title" onClose={handleClose} place={uniData.place} duration={uniData.dates}>
                {uniData.university}
            </DialogTitle>
            <DialogContent>
                <Typography gutterBottom>
                    Major : {uniData.major}
                </Typography>
                <Typography gutterBottom>
                    GPA : {uniData.GPA}
                </Typography>
                <Typography gutterBottom>
                    <List relatedCourses={uniData.relatedCourses}/>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                Ok
                </Button>
            </DialogActions>
          </div>
    )
}

class EducationComponent extends React.Component {
  state = {
    open: false,
    masters: {
        university: "University of Southern California (USC)",
        school: "viterbie School of Engineering",
        place: "Los Angeles, USA",
        major: "Computer Science",
        relatedCourses: {
            heading: "Courses",
            items: [
                {
                text: "Web Technologies",
                id: 1
            },
            {
                text: "Artificial Intelligence",
                id: 2
            },
            {
                text: "Algorithms & Data Structures",
                id: 3
            }]
        },
        dates: "2017 Jan - 2018 Dec",
        GPA: "3.61"

    },
    undergrad: {
        university: "RNS Institute of Technology",
        school: "",
        place: "Bangalore, India",
        major: "Computer Science",
        relatedCourses: {
            heading: "Courses",
            items: [
                {
                text: "Web Technologies",
                id: 1
            },
            {
                text: "Advanced Database management",
                id: 2
            },
            {
                text: "Distributed Systems",
                id: 3
            }]
        },
        dates: "2010 Aug - 2014 May",
        GPA: "9.2"
    },
    level: null
  };

  handleClickOpen = (levelData) => {
    this.setState({
      open: true,
      level: levelData
    });
  };

  handleClose = () => {
    this.setState({ open: false, level: null });
  };

  render() {
    return (
      <div>
        <p className="headline-white">Education</p>
        <div className="data-container">
            <div className="education masters" onClick={() => this.handleClickOpen("masters")}>
                <span className="course">Masters</span>
            </div>
            <div className="education undergrad" onClick={() => this.handleClickOpen("undergraduate")}>
                <span className="course">Undergraduate</span>
            </div>
        </div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          {this.state.level === "masters" ? 
            <ModalContent uniData={this.state.masters} handleClose={this.handleClose}/> : 
            <ModalContent uniData={this.state.undergrad} handleClose={this.handleClose}/>}
        </Dialog>
      </div>
    );
  }
}

export default EducationComponent;
