import React, { useState, useRef, useEffect } from 'react'
import styles from './CountUp.module.scss'

const initialNum = [2000, 1, 1]
const finalNum = [2014, 80, 50]
const gapNum = finalNum.map((item, idx) => item - initialNum[idx])
const CountUp = () => {
  const [nums, setNums] = useState(initialNum)
  const nodeRef = useRef(null)
  const [firstStartTime, setFirstStartTime] = useState(0)

  const handleMainScroll = e => {
    if (e.target && nodeRef.current) {
      const { target } = e
      const {
        top: parentTop,
        height: parentHeight
      } = target.getBoundingClientRect()
      const { top, bottom } = nodeRef.current.getBoundingClientRect()
      if (
        bottom < parentTop + parentHeight - 20 &&
        top > parentTop + 20 &&
        !firstStartTime
      ) {
        // 完全在视野中,如果还有滚动监听，则需要移除，代表之后再也不会进行动效了
        setFirstStartTime(Date.now())
        console.log('first--', Date.now()) // eslint-disable-line
      }
    }
  }

  useEffect(() => {
    let timerId
    if (firstStartTime) {
      // 有时间了，要开始计算了
      timerId = setInterval(() => {
        const passedTime = Date.now() - firstStartTime
        const duration = 2000
        const nextData = initialNum.map((num, idx) => {
          if (passedTime > idx * 100) {
            const ret =
              num + parseInt((passedTime / duration) * gapNum[idx], 10)
            return ret > finalNum[idx] ? finalNum[idx] : ret
          }
          return num
        })
        const accomplished = nextData.every(
          (item, idx) => item === finalNum[idx]
        )
        if (accomplished) {
          clearInterval(timerId)
        }
        console.log('interval--', nextData) // eslint-disable-line
        setNums(nextData)
      }, 24)
    }

    return () => clearInterval(timerId)
  }, [firstStartTime])

  return (
    <div className={styles.mainBoard}>
      <h2> 我是 CountUp的应用示例</h2>
      <div className={styles.main} onScroll={handleMainScroll}>
        <p> {'往下滚动 ↓'}</p>
        <section className={styles.sec1}>
          <ul ref={nodeRef}>
            {nums.map((num, idx) => (
              <li key={`li-${idx}`}>{num}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default CountUp
