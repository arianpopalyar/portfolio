import React, {Component} from 'react';

const Joke = ({ joke: {setup, punchline} })=> (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
    )

class Jokes extends Component {
    state = {joke: {}, jokes:[] };


    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke').then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message));
    }

    fetch10Jokes =() => {
        fetch('https://official-joke-api.appspot.com/random_ten').then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => alert(error.message));
    }

    render(){
      

        return (
            <div>
                <h2>Random Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr/>
                <h2>Want 10 more jokes</h2>                
                <button onClick={this.fetch10Jokes}>Click me</button>
                {this.state.jokes.map( joke => (<Joke key={joke.id} joke={joke}/>))}
                
            </div>
        )
    }
}

export default Jokes;
