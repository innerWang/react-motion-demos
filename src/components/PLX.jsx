import React from 'react'
import Plx from 'react-plx'
import styles from './PLX.module.scss'

// 注意 parallaxData是数组
const parallaxData = [
  {
    start: 40,
    duration: 200,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate',
        unit: ''
      },
      {
        startValue: '#c93827',
        endValue: '#fafeef',
        property: 'backgroundColor',
        unit: ''
      }
    ]
  }
]

const PLX = () => {
  return (
    <div className={styles.mainBoard}>
      <h2> 我是 react-plx 应用示例</h2>
      <section>
        <Plx
          parallaxData={parallaxData}
          className={styles.box}
          // eslint-disable-next-line no-console
          onPlxStart={() => console.log('Plx - onPlxStart callback ')}
          // eslint-disable-next-line no-console
          onPlxEnd={() => console.log('Plx - onPlxEnd callback')}
        />
      </section>
      <div style={{ height: '1000px' }} />
    </div>
  )
}

export default PLX
