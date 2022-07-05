import UseEffectTimer from './UseEffectTimer' 
import React, { useState } from 'react'

function UseEffect2() {
  const [showTimer, setShowTimer] = useState(false)
  return (
    <div>
      {showTimer && <UseEffectTimer/>}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}

export default UseEffect2