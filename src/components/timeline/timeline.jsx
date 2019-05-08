import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from '@material-ui/core';
import Chip from 'material-ui/Chip';
import './timeline.css';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';
import CardContent from "@material-ui/core/CardContent";

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
                          title="Full Stack Developer" subheader="SAP Labs, Palo Alto"
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
                          <CardContent>
                            June 2018 - Present. Development of React, Redux Applications & Java Microservices.
                            <br/><br/>
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
                                  <Chip>SASS</Chip>
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
                          title="Software Developer" 
                          subtitle="Testo	SE	&	Co.	KGaA"
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
                            <CardContent>
                                October	2016 - October 2017. Development of Microservices, UX-Consulting.
                                <br/><br/>
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
                            </CardContent>
                        </Collapse>
                        
                    </Card>
                  </div>
                  <div className="timeline-entry">
                    <Card className={classes.card}>
                        <CardHeader 
                          title="Software Developer" 
                          subtitle="Testo	SE	&	Co.	KGaA"
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
                            <CardContent>
                                October	2016 - October 2017. Development of Microservices, UX-Consulting.
                                <br/><br/>
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
                            </CardContent>
                        </Collapse>
                        
                    </Card>
                  </div>
            </div>
        );
    }
}

export default withStyles(styles)(TimelineComponent);

