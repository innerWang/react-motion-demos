import React, { useState } from 'react'
import { Motion, spring } from 'react-motion'

import styles from './Motion.module.scss'

const MotionExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.mainBoard}>
      <h2> 我是 Motion 的应用示例</h2>
      <button onClick={() => setOpen(oldState => !oldState)}>
        Click To Toggle!
      </button>
      <Motion style={{ x: spring(open ? 400 : 0) }}>
        {({ x }) => (
          <div className={styles.motionBgBar}>
            <div
              className={styles.motionBlock}
              style={{ transform: `translateX(${x}px)` }}
            />
          </div>
        )}
      </Motion>
    </div>
  )
}

export default MotionExample
