import React, {Component} from 'react';
import {
    Card,
    CardHeader,
} from '@material-ui/core';
import Chip from 'material-ui/Chip';
import './timeline.css';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardContent from "@material-ui/core/CardContent";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange1 = (expanded1) => {
      this.setState({expanded1: !this.state.expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: !this.state.expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: !this.state.expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {

        const { classes } = this.props;

        return (
            <div className="timeline">
              <p className="headline">Working experience</p>

                <div className="timeline-entry">
                    <Card className={classes.card}>
                        <CardHeader 
                          title="Full Stack Developer" subheader="SAP Labs, Palo Alto."
                          action={
                            <IconButton
                                className={classnames(classes.expand, {
                                  [classes.expandOpen]: this.state.expanded1,
                                })}
                                onClick={this.handleExpandChange1}
                                aria-expanded={this.state.expanded1}
                                aria-label="Show more"
                              >
                                <ExpandMoreIcon />
                            </IconButton>
                          }
                          />
                        <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
                          <CardContent className="content">
                            June 2018 - Present. 
                            <br/><br/>
                            <List component="nav">
                              <ListItem>
                                <ListItemText primary="Development of React, Redux Applications & Java Microservices." />
                              </ListItem>
                              <Divider />
                              <ListItem>
                                <ListItemText primary="Improved a React chrome extension, developed react transitions & ported the entire application on to redux." />
                              </ListItem>
                              <Divider />
                              <ListItem>
                                <ListItemText primary="Developed NLP microservices for handling user queries by detecting the user intents and entity types." />
                              </ListItem>
                              <Divider />
                            </List>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>React 16+</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript ES6</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Java 8</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>NLP</Chip>
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
                            </CardContent>
                          </Collapse>    
                    </Card>
                  </div>
                  <div className="timeline-entry">
                    <Card className={classes.card}>
                        <CardHeader 
                          title="Software Developer Intern" 
                          subheader="Emune Systems, Los Angeles"
                          action={
                            <IconButton
                                className={classnames(classes.expand, {
                                  [classes.expandOpen]: this.state.expanded2,
                                })}
                                onClick={this.handleExpandChange2}
                                aria-expanded={this.state.expanded2}
                                aria-label="Show more"
                              >
                                <ExpandMoreIcon />
                            </IconButton>
                          }
                          />
                        <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                            <CardContent className="content">
                                May 2017 - August 2017.
                                <br/><br/>
                                <List component="nav">
                                  <ListItem>
                                    <ListItemText primary="Design, development & revamp of client onboarding dashboard which involves work in Angular 4, node.js & web services." />
                                  </ListItem>
                                  <Divider />
                                  <ListItem>
                                    <ListItemText primary="Planned and Implemented micro-services." />
                                  </ListItem>
                                  <Divider />
                                  <ListItem>
                                    <ListItemText primary="Provided SSO & Passport based authentication." />
                                  </ListItem>
                                  <Divider />
                                  <ListItem>
                                    <ListItemText primary="Created Angular4 components, using angular material CSS framework and NPM’s." />
                                  </ListItem>
                                  <Divider />
                                </List>
                                  <div className="timeline-entries">
                                    <div className="timeline-entry-chip">
                                      <Chip>Angular 4</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>Docker</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>node.js</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>Material UI</Chip>
                                    </div>
                                  </div>
                            </CardContent>
                        </Collapse>
                        
                    </Card>
                  </div>
                  <div className="timeline-entry">
                    <Card className={classes.card}>
                        <CardHeader 
                          title="Senior Software Developer" 
                          subheader="Sonus Networks"
                          action={
                            <IconButton
                                className={classnames(classes.expand, {
                                  [classes.expandOpen]: this.state.expanded3,
                                })}
                                onClick={this.handleExpandChange3}
                                aria-expanded={this.state.expanded3}
                                aria-label="Show more"
                              >
                                <ExpandMoreIcon />
                            </IconButton>
                          }
                          />
                        <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
                            <CardContent className="content">
                                June	2014 - October 2016.
                                <br/><br/>
                                <List component="nav">
                                  <ListItem>
                                    <ListItemText primary="Java developer in the Element Management System team which provides FCAPS functionality." />
                                  </ListItem>
                                  <Divider />
                                  <ListItem>
                                    <ListItemText primary="Developed novel features for EMS using JAVA, Hibernate, JMS, JMX, Mbeans & REST." />
                                  </ListItem>
                                  <Divider />
                                  <ListItem>
                                    <ListItemText primary="Recipient of Rising star award & Team excellence award." />
                                  </ListItem>
                                  <Divider />
                                </List>
                                  <div className="timeline-entries">
                                    <div className="timeline-entry-chip">
                                      <Chip>Java 8</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>Hibernate</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>Postgress</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>JMS</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>Java Spring</Chip>
                                    </div>
                                    <div className="timeline-entry-chip">
                                      <Chip>Confluence, JIRA</Chip>
                                    </div>
                                  </div>
                            </CardContent>
                        </Collapse>
                        
                    </Card>
                  </div>
            </div>
        );
    }
}

export default withStyles(styles)(TimelineComponent);

