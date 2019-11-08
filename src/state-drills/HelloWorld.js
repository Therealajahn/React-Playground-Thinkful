import React from 'react';

class HelloWorld extends React.Component {
    state = {
        p: "Hello World",
    }

    friendClicked = () => {
        this.setState({
            p: "Hello, Friend!",
        })
    }

    reactClicked = () => {
        this.setState({
            p: "Hello, React!",
        })
    }

    worldClicked = () => {
        this.setState({
            p: "Hello, World!",
        })
    }
    
    render(){
        return(
            <div className="HelloWorld">
            <p>{this.state.p}</p>
            <button onClick={this.friendClicked}>Friend</button>
            <button onClick={this.reactClicked}>React{this.reactClicked}</button>
            <button onClick={this.worldClicked}>World{this.worldClicked}</button>
            </div>
        )     
    }
}

export default HelloWorld;