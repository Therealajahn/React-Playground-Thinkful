import React from 'react';

class Accordian extends React.Component {
    static defaultProps = {
        sections: [],
    }
    state = {
        currentIndex:null,
    }
    console.log(this.sections)
    renderButtons() {
        return this.props.sections.map((section,index) => (
            <li>
            <button
            onClick={() => this.handleButtonClick(index)}
            >{section.title}</button> 
            </li>
            ))
    }

    handleButtonClick(index){
      this.setState({
          content: index ,
      })    
    }

    renderContent() {
      return (
      <p>{this.props.sections[this.state.index].content}</p> 
        ) 
    }
    
   

   
    
    
    render(){
        return(
            <div className="Accordian">
               <ul>
                   {this.renderButtons()}
                   {this.renderContent()}
               </ul>
            </div>
        )     
    }
}

export default Accordian;