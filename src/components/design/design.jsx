import React, {Component} from 'react';
import AnimatedCard from '../animatedCard/animatedCard';
import {cloneDeep} from 'lodash/fp';
import { Motion, spring } from 'react-motion';
import './design.css';


class DesignComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        storageChecked: false,
        project1 : {
          projectDescription : ["Developed complex CSS animations",
        "Incorporated Responsive web design techniques using Floats and flex-box",
        "Built the website using 7-1 CSS architecture with Sass."],
        isLiked: false,
        id: 1,
        initial:"N",
        imageLocation:"project1.png",
        title:"Natours",
        active: true,
        rotated: false
        },

        project2 : {
          projectDescription : ["Developed complex CSS animations",
        "Incorporated Responsive web design techniques using Floats and flex-box",
        "Built the website using 7-1 CSS architecture with Sass."],
        isLiked: false,
        id: 2,
        initial:"B",
        imageLocation:"project2.png",
        title:"Burger Builder",
        active: false,
        rotated: false
        },

        project3 : {
          projectDescription : ["Developed complex CSS animations",
        "Incorporated Responsive web design techniques using Floats and flex-box",
        "Built the website using 7-1 CSS architecture with Sass."],
        isLiked: false,
        id: 3,
        initial:"O",
        imageLocation:"project3.png",
        title:"Organic Shop",
        active: false,
        rotated: false
        },

        project4 : {
          projectDescription : ["Developed complex CSS animations",
        "Incorporated Responsive web design techniques using Floats and flex-box",
        "Built the website using 7-1 CSS architecture with Sass."],
        isLiked: false,
        id: 4,
        initial:"F",
        imageLocation:"project4.png",
        title:"Feedback Aggregator",
        active: false,
        rotated: false
        },

        project5 : {
          projectDescription : ["Developed complex CSS animations",
        "Incorporated Responsive web design techniques using Floats and flex-box",
        "Built the website using 7-1 CSS architecture with Sass."],
        isLiked: false,
        id: 5,
        initial:"B",
        imageLocation:"project5.png",
        title:"Budgety App",
        active: false,
        rotated: false
        }
      }

      this.likeClicked = this.likeClicked.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
      this.getActiveProjectIndex = this.getActiveProjectIndex.bind(this);
      this.calcTranslateX = this.calcTranslateX.bind(this);
      this.handleShowMore = this.handleShowMore.bind(this)
    }

    componentDidMount() {
      let stateCopy = cloneDeep(this.state);

      if(!this.state.storageChecked){
        let localState = JSON.parse(localStorage.getItem("projectsData"))
        if(localState){
          stateCopy.project1.isLiked = localState.project1.isLiked;
          stateCopy.project2.isLiked = localState.project2.isLiked;
          stateCopy.project3.isLiked = localState.project3.isLiked;
          stateCopy.project4.isLiked = localState.project4.isLiked;
          stateCopy.project5.isLiked = localState.project5.isLiked;
          stateCopy.storageChecked = true;
          
        }
      }

      this.setState(stateCopy);
      
    }

    handleOnClick(id){
    
      let stateCopy = cloneDeep(this.state);
      let keys = Object.keys(stateCopy);

      for(const key of keys){
        if(stateCopy[key].title && stateCopy[key].id === id){
          stateCopy[key].active = true
        } else if(stateCopy[key].title) {
          stateCopy[key].active = false
        }
      }

      this.setState(stateCopy);   
        
    }

    likeClicked(e, id) {
      
      let stateCopy = cloneDeep(this.state);
      let keys = Object.keys(stateCopy);
      let stateUpdated = false;

      for(const key of keys){
        if(stateCopy[key].title && stateCopy[key].id === id && stateCopy[key].active){
          stateCopy[key].isLiked = !stateCopy[key].isLiked;
          stateUpdated = true;
          break;
        }
      }

      if(stateUpdated){
        localStorage.setItem("projectsData", JSON.stringify(stateCopy));
        this.setState(stateCopy);
        e.stopPropagation(); 
      } 
    }

    calcTranslateX(activeAccountIndex) {

      let accountWidth = 300;
      if(window.innerWidth <= 500) {
        accountWidth = 270;
      }

      const fixedIndex = 1;
      
      const diff = fixedIndex - activeAccountIndex;
      
      
      return (diff * (accountWidth)) + (activeAccountIndex * (15 - (activeAccountIndex -1) * 11)) ;
    }

    getActiveProjectIndex() {
      let keys = Object.keys(this.state);
      
      for(const key of keys){
        if(this.state[key].title && this.state[key].active){
          return this.state[key].id
        }
      }
    }

    handleShowMore(id, e) {
      let stateCopy = cloneDeep(this.state);
      let keys = Object.keys(stateCopy);
      let stateUpdated = false;

      for(const key of keys){
        if(stateCopy[key].title && stateCopy[key].id === id && stateCopy[key].active){
          stateCopy[key].rotated = !stateCopy[key].rotated;
          stateUpdated = true;
          break;
        }
      }

      if(stateUpdated){
        localStorage.setItem("projectsData", JSON.stringify(stateCopy));
        this.setState(stateCopy);
        e.stopPropagation(); 
      } 
    }
    render() {

        const index = this.getActiveProjectIndex();
        const translateX = this.calcTranslateX(index);
        return (
        
          <Motion style={{ x: spring(translateX) }}>
            {({ x }) =>
                <div className="cards-wrapper">
                    <p className="headline">Projects</p>
                    <div className="project" style={{ transform: `translateX(${x}px)` }}>
                  
                      <AnimatedCard
                          project={this.state.project1}
                          onClick={this.handleOnClick}
                          likeClicked={this.likeClicked}
                          handleShowMore={this.handleShowMore}
                          />
                      <AnimatedCard
                          project={this.state.project2}
                          onClick={this.handleOnClick}
                          likeClicked={this.likeClicked}
                          handleShowMore={this.handleShowMore}
                          />
                      <AnimatedCard
                          project={this.state.project3}
                          onClick={this.handleOnClick}
                          likeClicked={this.likeClicked}
                          handleShowMore={this.handleShowMore}
                          />

                      <AnimatedCard
                          project={this.state.project4}
                          onClick={this.handleOnClick}
                          likeClicked={this.likeClicked}
                          handleShowMore={this.handleShowMore}
                          />
                    </div>
                </div>
            }
            </Motion>
          
        );
    }
}

export default DesignComponent;
