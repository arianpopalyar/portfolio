import React, {Component} from 'react';

const TITLES=[
    'a Software Engineer',
    'a YouTuber',
    'a traveler',
    'a person that loves DIY'
];

class Titles extends Component{
    state = { titleIndex:0 }

    componentDidMount() {
        this.animateTitles();
    }

    animateTitles =  () =>{
        setInterval(() => {
            const titleIndex =  (this.state.titleIndex+1)%TITLES.length;
            this.setState({titleIndex})
        }, 4000);
    }
    render(){
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        );
    }
}

export default Titles;