const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
       <Header course={course}/>
       <ContentB
        part1={part1}
        part2={part2}
        part3={part3}
       >
       </ContentB>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const ContentB = (props) => {
  return (
    <div>
      <Part data={props.part1}></Part>
      <Part data={props.part2}></Part>
      <Part data={props.part3}></Part>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.data.name} {props.data.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}

export default App