import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
    }

    componentDidMount() {
       this.countUp = setInterval(() => {
           this.setState({
              count: this.state.count + 1
           })
       },1000)
        
    }

    tickTockBoom = () => {
             if (this.state.count > 8) {return "BOOM!!!!"}
             if (this.state.count%2 === 0){ return "tick"}
             else if (this.state.count !== 0) {return "tock"}
            
    }
    
    render(){
        return(
            <div className="Bomb">
                <p>{this.tickTockBoom()}
                    </p>    
            </div>
        )     
    }
}

export default Bomb;