import React from 'react'
import Plx from 'react-plx'
import styles from './PLX.module.scss'

// 注意 parallaxData是数组 ， 检测的是整个页面的滚动，而不是单个容器的？？？
const parallaxData = [
  {
    start: 'self',
    startOffset: 50,
    duration: 300,
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
      {/* <div className={styles.mainSec}>
        <div className={styles.padding} /> */}
      <div className={styles.padding} />
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
      <div className={styles.padding} />
      {/* </div> */}
    </div>
  )
}

export default PLX
