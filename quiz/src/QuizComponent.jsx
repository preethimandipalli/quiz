import React, { Component } from 'react'
import questions from '/Users/vinodkumarreddy/Desktop/react_projects/quiz/src/question.json';

export default class QuizComponent extends Component {

    constructor(){
        super()
        this.state={
            currentQuestion:questions[1],
            previousQuestion:[],
            nextQuestion:[],
            currentIndex:1
        }

    }
  

    previous =()=>{
        if(this.state.currentIndex-1>=-1){
            this.setState({currentIndex:this.state.currentIndex-1})
            const temp=questions[this.state.currentIndex]
            const temppre=questions[this.state.currentIndex-1]
            const tempnext=questions[this.state.currentIndex+1]
            this.setState({currentQuestion:temp})
            this.setState({previousQuestion:temppre})
            this.setState({nextQuestion:tempnext})
        }

    }
    next =()=>{
        if(this.state.currentIndex+1<questions.length){
            this.setState({currentIndex:this.state.currentIndex+1})
            const temp=questions[this.state.currentIndex]
            const temppre=questions[this.state.currentIndex-1]
            const tempnext=questions[this.state.currentIndex+1]
            this.setState({currentQuestion:temp})
            this.setState({previousQuestion:temppre})
            this.setState({nextQuestion:tempnext})
        }
    }
    quit=()=>{
        if( window.confirm('Do you really want to quit?')){
            this.setState({currentIndex:-1})
            this.setState({currentQuestion:[]})
            this.setState({previousQuestion:[]})
            this.setState({nextQuestion:[]})            
        }
};
    render() {
        return (
            
            <div className="outer">
                
            
               <div className="inner">
                    <h1>Question</h1>
                    
                    <div >

                        <h3>{this.state.currentQuestion.question}</h3>
                    </div>
                    <div className="options">
                        <button>{this.state.currentQuestion.optionA}</button>
                        <button>{this.state.currentQuestion.optionB}</button>
                        <button>{this.state.currentQuestion.optionC}</button>
                        <button>{this.state.currentQuestion.optionD}</button>
                     </div>
                    
        
        
                    <div className="button">
                        <button onClick={this.previous}>Previous</button>
                        <button onClick={this.next}>Next</button>
                        <button onClick={this.quit}>Quit</button>  
                    </div>
                </div>
                </div>
            
            
            
        )
    }
}
