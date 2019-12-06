import React, { useState } from 'react'

function About({ name }) {
  const [value, setValue] = useState(0)
  const increment = () => setValue(prev => prev + 1)
  return (
    <div>
      <div>About page {name}</div>
      <div>Current value {value}</div>
      <div>
        <button type="button" onClick={increment}>
          increment
        </button>
      </div>
    </div>
  )
}

export default {
  component: About,
}
