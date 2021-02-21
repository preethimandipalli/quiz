import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div className="result">
                <h1>Result</h1>
                <div >
                    <h2>You need more practice!</h2>
                    <h1>Your Score: 20%</h1>
                    <p>Total number of questions: <span>15</span></p>
                    <p>Number of attempted questions: <span>9</span></p>
                    <p>Number of Correct Answers: <span>3</span></p>
                    <p>Number of Wrong Answers: <span>6</span></p>
                </div>
                <div className="button">
                    <button>Play Again</button>
                    <button>Back to Home</button>
                </div>

            </div>
         
        )
    }
}
