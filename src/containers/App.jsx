import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { paths } from 'utils/paths'

import MotionExample  from 'components/Motion'
import StraggedExample from 'components/Stragged'
import  TransitionMotionExample from 'components/Transition'

function App() {
  return (
    <Fragment>
      <h1>React-Motion</h1>
      <Router>
      <div className="cont">
        <aside>
        {Object.values(paths).map(t => (
          <div className="nav-item" key={t.key}>
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
            <Route exact path={paths.motion.path} component={MotionExample} />
        </main>
      </div>
      </Router>
    </Fragment>
  );
}

export default App;
