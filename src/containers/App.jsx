import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { paths } from 'utils/paths'

import MotionExample from 'components/Motion'
import StraggedExample from 'components/Stragged'
import TransitionMotionExample from 'components/Transition'
import DigitalMotionExample from 'components/DigitalMotion'
import PLXMotion from 'components/PLX'
import CountUp from 'components/CountUp'

import styles from './App.module.scss'

function App() {
  return (
    <>
      <h1>React-Motion</h1>
      <Router>
        <div className={styles.cont}>
          <aside>
            {Object.values(paths).map(t => (
              <div className={styles['nav-item']} key={t.key}>
                <Link to={t.path}>{t.title}</Link>
              </div>
            ))}
          </aside>
          <main>
            <Route path={paths.stragged.path} component={StraggedExample} />
            <Route
              path={paths.transition.path}
              component={TransitionMotionExample}
            />
            <Route path={paths.digital.path} component={DigitalMotionExample} />
            <Route exact path={paths.motion.path} component={MotionExample} />
            <Route exact path={paths.plx.path} component={PLXMotion} />
            <Route exact path={paths.countup.path} component={CountUp} />
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
