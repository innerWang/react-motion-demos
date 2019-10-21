import React, { useState } from 'react'
import { TransitionMotion, spring } from 'react-motion'

const TransitionMotionExample = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, now: 't0' })

  const willLeave = styleThatLeft => {
    // 当circle 消失时，等到其opacity和 scale 达到对应的值才消失
    return { ...styleThatLeft.style, opacity: spring(0), scale: spring(2) }
  }

  const getStyles = () => {
    return pos.x
      ? [
          {
            key: pos.now,
            style: {
              opacity: spring(1),
              scale: spring(0),
              x: pos.x,
              y: pos.y
            }
          }
        ]
      : []
  }

  const handleMouseMove = e => {
    /**
     * pageX, pageY  相对于文档左上角定位，不支持IE
     * offsetX, offsetY 相对于文档左上角定位，仅支持IE
     * screenX, screenY 相对于屏幕的左上角的定位，包含浏览器的工具栏
     * 注意，此处使用 currentTarget 很重要！！ 因为有可能触发circle 的 onMouseMove 事件
     * */
    const { pageX, pageY } = e
    const { left, top } = e.currentTarget.getBoundingClientRect()
    const posX = pageX - left
    const posY = pageY - top
    setPos({ x: posX - 20, y: posY - 20, now: `t${Date.now()}` })
  }

  return (
    <div className="main-board">
      <h2> 我是 TransitionMotion 应用示例</h2>
      <TransitionMotion styles={getStyles} willLeave={willLeave}>
        {stepStyles => {
          return (
            <section className="trans-sec" onMouseMove={handleMouseMove}>
              {stepStyles.map(({ key, style: { x, y, opacity, scale } }) => (
                <div
                  key={key}
                  className="trans-sec-circle"
                  style={{
                    opacity,
                    scale,
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    WebkitTransform: `translate(${x}px, ${y}px) scale(${scale})`
                  }}
                />
              ))}
            </section>
          )
        }}
      </TransitionMotion>
    </div>
  )
}

export default TransitionMotionExample
