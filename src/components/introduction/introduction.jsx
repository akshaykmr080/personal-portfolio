import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="Akshay.jpg" className="introduction--image" size={230}/>
            <p className="introduction-text">
              Loves Javascript, React and biryani.
              Lives and breathes code. Defender of peace.
              Full Stack developer, currently living in Sunnyvale, CA, USA.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
