// For FullStackOpen Exercise 1//
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  const contentArray = (props.parts).map((part) =>
    <Part part={part} />
  );
  return (
    <>
      {contentArray}
    </>
  )
}

const Total = (props) => {
  // Map # of exercises to an array
  const exercisesCount = props.parts.map((part) => 
    part.exercises
  );

  // Reduce that array to get a sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sumExercises = exercisesCount.reduce(reducer);

  return (
    <p>Number of exercises {sumExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))