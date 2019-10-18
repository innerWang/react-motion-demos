import React, { useState } from "react";
import { StaggeredMotion, spring } from "react-motion";

const StraggedExample = props => {
  const [scale, setScale] = useState(1);
  const getStyles = prevStyles =>
    prevStyles.map((item, idx) => {
      return idx === 0
        ? { scale: spring(scale) }
        : {
            scale: spring(prevStyles[idx - 1].scale)
          };
    });
  return (
    <div>
      <h2> 我是 Stragged 的应用示例</h2>
      <button onClick={() => setScale(prevScale => (prevScale === 0 ? 1 : 0))}>
        {"  click toggle!  "}
      </button>
      {/** 此处注意， map 操作时需要元素存在  */}
      <StaggeredMotion
        styles={getStyles}
        defaultStyles={Array(5)
          .join("-")
          .split("-")
          .map(() => ({ scale: 0 }))}
      >
        {stepStyles => {
          return (
            <div className="stragged-warp">
              {stepStyles.map((stepStyle, idx) => {
                /** 此处一定要注意！！ 是 stepStyle = {scale: 1}  */
                return (
                  <div
                    key={idx + 1}
                    style={{
                      transform: `scale(${stepStyle.scale})`,
                      opacity: stepStyle.scale
                    }}
                    className="stragged-box"
                  />
                );
              })}
            </div>
          );
        }}
      </StaggeredMotion>
    </div>
  );
};

export default StraggedExample;
