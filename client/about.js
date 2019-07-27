import React from 'react'

export default function About({ name }) {
  const [value, setValue] = React.useState(0)
  const increment = () => setValue(value + 1)
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
