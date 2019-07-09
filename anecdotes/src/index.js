import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const anecdotesLength = props.anecdotes.length;
  const emptyArray = Array.from(Array(anecdotesLength), () => 0);

  const [votes, setVotes] = useState(emptyArray);



  const generateRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * anecdotesLength);
    console.log(randomIndex);
    setSelected(randomIndex);
  }

  const updateVote = () => {
    let votesArray = [...votes];
    votesArray[selected] = votesArray[selected] + 1;
    console.log(votesArray);
    setVotes(votesArray);
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={updateVote}>Vote</button>
        <button onClick={generateRandomIndex}>next anecdote</button>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));