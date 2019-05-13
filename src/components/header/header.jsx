import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import TonyStarkHeart from '../TonyStarkHeart/tonyStarkHeart';
import PebbleComponent from '../pebbleComponent/pebbleComponent';
const scrollTo = require('scroll-to');
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height,
          toggled : false,
          pebbles: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        };

        this.toggleState = this.toggleState.bind(this);
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    toggleState() {
      let pebblesCopy = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      if(!this.state.toggled){
          pebblesCopy = Array.from({length: 24}, () => Math.floor(Math.random() * 2));
      }
      this.setState({toggled: !this.state.toggled, pebbles: pebblesCopy})

      
  }
    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
          <div className="header-wrapper" style={{"height": this.state.height}}>
            <PebbleComponent toggled={this.state.toggled} pebbles={this.state.pebbles} toggleState={this.toggleState}/>
            <TonyStarkHeart toggled={this.state.toggled}/>
            <div className="header">
                <h3 className="header-name1">Akshay Kumar</h3><h3 className="header-name2">Shreekanth</h3>
                <h6 className="header-position">Fullstack Software Engineer</h6>
            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#A80202" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
