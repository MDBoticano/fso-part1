import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DayAnecdote = ({ selected, anecdotes, votes }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        has {votes[selected]} votes
      </div>
    </>
  )
}

const MostVotes = ({ anecdotes, votes }) => {
  const indexOfMostVotes = votes.indexOf(Math.max(...votes));
  const maxVotes = (Math.max(...votes));
  // console.log('Most votes:', indexOfMostVotes);
  // console.log(anecdotes[indexOfMostVotes]);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[indexOfMostVotes]}
      <div>
        has {maxVotes} votes
      </div>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const anecdotesLength = props.anecdotes.length;
  const zeroFilledArray = Array.from(Array(anecdotesLength), () => 0);

  const [votes, setVotes] = useState(zeroFilledArray);

  const generateRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * anecdotesLength);
    // console.log(randomIndex);
    setSelected(randomIndex);
  }

  const updateVote = () => {
    let votesArray = [...votes];
    votesArray[selected] = votesArray[selected] + 1;
    // console.log(votesArray);
    setVotes(votesArray);
  }

  return (
    <div>
      <DayAnecdote selected={selected} votes={votes} anecdotes={anecdotes} />
      <div>
        <button onClick={updateVote}>Vote</button>
        <button onClick={generateRandomIndex}>next anecdote</button>
      </div>
      <MostVotes votes={votes} anecdotes={props.anecdotes} />
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