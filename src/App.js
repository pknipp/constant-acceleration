import React from 'react';
import combo from './combo';

const App = () => {
    let problem = combo();
    return (
        <>
            <h4>Constant-acceleration motion problem:</h4>
            <div><b>Process:</b> {problem.statement}</div>
            <div><b>Question:</b> {problem.question}</div>
            <div><b>Answer:</b> {problem.answer}</div>
            <div><b>Note:</b> {problem.note}</div>
        </>
    )
}

export default App;
