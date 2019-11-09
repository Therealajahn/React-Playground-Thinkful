import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }
    state = {
        currentIndex:null,
    }

    handleSetActiveSection = (sectionIndex) => {
        // console.log('buttonClicked', {index});
      this.setState({
          activeSectionIndex: sectionIndex
      })    
    }

    renderItem(section, index, activeSectionIndex) {
       return (
           <li key={index} className='Accordion__item'> 
            <button onClick={() => this.handleSetActiveSection(index)}>
                {section.title}
            </button>
           </li>
       )
        // return this.props.sections.map((section,index) => (
        //     <li>
        //     <button key={index}
        //     onClick={() => this.handleButtonClick(index)}
        //     >{section.title}</button> 
        //     </li>
        //     ))
    }

    

    renderContent() {
        const {activeSectionIndex} = this.state
        const {sections} = this.props
       return ( 
           <ul className='Accordion'> 
           {sections.map((section, index) =>
           this.renderItem(section, index, activeSectionIndex)
               
           )}
           </ul>)
           
    //   return (
    //   <p>{this.props.sections[].content}</p> 
    //     ) 
    }
    
   

   
    
    
    // render(){
    //     return(
    //         <div className="Accordian">
    //            <ul>
    //                {this.renderButtons()}
    //                {this.renderContent()}
    //            </ul>
    //         </div>
    //     )     
    // }
}

export default Accordion;