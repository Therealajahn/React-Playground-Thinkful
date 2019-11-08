import React from 'react';

class RouletteGun extends React.Component {
    state = {
        gunStatus:"Ready to Die?",
        chamber:null,
        bulletInChamber:null,
        spinningTheChamber: false,
    }
    
   
    buttonClicked = () => {
        this.setState({
            spinningTheChamber:true,
            gunStatus: "spinning the chamber and pulling the trigger! ...."
        });
        this.timeout = setInterval(() => {
            this.setState({
                chamber: Math.ceil(Math.random()*8),
                spinningTheChamber: false,
                bulletInChamber: this.props.bulletInChamber
            });
            if(this.state.chamber !== this.props.bulletInChamber){
                this.setState({
                    gunStatus: "you're safe"
                })    
            }else{
                this.setState({
                    gunStatus: "BANG!!!!"
                })
            }
        clearInterval(this.timeout)   
        },2000)
       
    }

    componentWillUnmount(){
        clearInterval(this.timeout); 
    }

    
    
   

   
    
    
    render(){
        return(
            <div className="Bomb">
               <button onClick={this.buttonClicked}>Spin and Pull</button>
               <p>{this.state.gunStatus}</p>  
            </div>
        )     
    }
}

export default RouletteGun;