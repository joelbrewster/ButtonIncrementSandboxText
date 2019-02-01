import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  const decrementCount = increment => {
    setCount(count - increment)
  }

  const incrementReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <span>Current counter is: {count}</span>
      </div>
      <div>
        <Button prefix="+" increment={1} onClickFunction={incrementCount} />
        <Button prefix="+" increment={10} onClickFunction={incrementCount} />
        <Button prefix="+" increment={100} onClickFunction={incrementCount} />
        <Button prefix="+" increment={1000} onClickFunction={incrementCount} />
      </div>
      <div>
        <Button prefix="-" increment={1} onClickFunction={decrementCount} />
        <Button prefix="-" increment={10} onClickFunction={decrementCount} />
        <Button prefix="-" increment={100} onClickFunction={decrementCount} />
        <Button prefix="-" increment={1000} onClickFunction={decrementCount} />
      </div>
      <div>
        <Button increment="Click to reset" onClickFunction={incrementReset} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
