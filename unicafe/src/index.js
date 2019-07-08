import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clickHandler, text}) => {
  return( 
    <button onClick={clickHandler}>{text}</button>
  )
}

const Statistics = ({stats}) => {
  const allStats = stats.good + stats.neutral + stats.bad;
  const avgStats = (stats.good + (-1)*stats.bad) / allStats;
  const positiveStats = (stats.good/allStats * 100 + '%');

  if (allStats === 0 ) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  } 

  return(
    <>
      <h2>statistics</h2>
      <Stat value={stats.good} text='good' />
      <Stat value={stats.neutral} text='neutral' />
      <Stat value={stats.bad} text='bad' />
      <Stat value={allStats} text='all' />
      <Stat value={avgStats} text='average' />
      <Stat value={positiveStats} text='positive' />
    </>
  )
}

const Stat = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button clickHandler={()=> setGood(good + 1)} text='good' />
      <Button clickHandler={()=> setNeutral(neutral + 1)} text='neutral' />
      <Button clickHandler={()=> setBad(bad + 1)} text='bad' />
      <Statistics stats={{good, neutral, bad}} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))