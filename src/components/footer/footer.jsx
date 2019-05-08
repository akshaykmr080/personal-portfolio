import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/akshaykmr080?tab=repositories">
            Github
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/akshaykumars/">
            LinkedIn
          </a>
           /
          <a target="_blank" href="https://www.instagram.com/akshay.kmr080/">
            Instagram
          </a>
           /
          <a target="_blank" href="https://www.facebook.com/akshaykmr080">
            Facebook
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
