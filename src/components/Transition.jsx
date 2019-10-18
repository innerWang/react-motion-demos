import React from "react";
//import { TransitionMotion } from "react-motion";

const TransitionMotionExample = () => {
  //const [pos, setPos] = useState({ x: 0, y: 0, now: "t0" });

  // const willLeave = styleThatLeft => {
  //   return {};
  // };

  // const getStyles = () => {
  //   return;
  // };

  const handleMouseMove = e => {
    console.log(e);
  };

  return (
    <div className="main-board">
      <h2> 我是 TransitionMotion 应用示例</h2>
      <section className="trans-sec" onMouseMove={handleMouseMove}>
        {/* <TransitionMotion styles={getStyles} willLeave={willLeave}>
          {}
        </TransitionMotion> */}
      </section>
    </div>
  );
};

export default TransitionMotionExample;
