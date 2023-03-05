import React, { Component} from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import myPic from "../assets/myPic.png";
import Titles from "./Titles";
import Header from "./Header";
class App extends Component {
    state = { displayBio :false }

    toggleButton = () => {
        this.setState ({ displayBio : !this.state.displayBio });
    }

    render(){ 
   
        return(
            <div>
                <img src={myPic} className="profile"/>
                <h1>
                    Hi 
                </h1>
                <p>Hi I am Arian </p>
                <Titles/>
               { 
               this.state.displayBio ?(
                <div>
                    <p>Hi was Front End developer for 6 years, I am now Software Engineer since 5 years+ </p>
                    <p>follow me so can share the tips and tricks I picked in all these years.</p>
                    <button onClick={this.toggleButton}>Show less</button>
                </div>
                ): <div><button onClick={this.toggleButton}>Read More</button></div>
                       
            }
            <hr />
            <Projects /> 
            <hr />
            <SocialProfiles />
        </div>
        );
    }
}
export default App;