import React, { useState } from 'react'
import { Motion, spring } from 'react-motion'

const MotionExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h2> 我是 Motion 的应用示例</h2>
      <button onClick={() => setOpen(oldState => !oldState)}>
        Click To Toggle!
      </button>
      <Motion style={{ x: spring(open ? 400 : 0) }}>
        {({ x }) => (
          <div className="motion-bg-bar">
            <div
              className="motion-block"
              style={{ transform: `translateX(${x}px)` }}
            />
          </div>
        )}
      </Motion>
    </div>
  )
}

export default MotionExample
