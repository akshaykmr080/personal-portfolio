import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Take a look at my code</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repo"
                    title="akshay/personal-portfolio"
                    avatar="github.png"
                  />
                    <CardText>This application is made with React and Material UI. Check out the source code on Github.</CardText>

                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/akshaykmr080/personal-portfolio" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
