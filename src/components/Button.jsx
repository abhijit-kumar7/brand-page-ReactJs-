import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const values = useContext(counterContext)
  return (
    <div>
      <button onClick={() => values.setCount((count) => count + 1)}><span><Component1/></span>I am a button</button>
    </div>
  )
}

export default Button