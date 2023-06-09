import { Fragment } from 'react';

const App = () => {
  return <Fragment>
    <div className="upper" tabIndex={0}>
      <h1 className="item">Hello</h1>
      <h1 className="item">World</h1>
    </div>
    <input className="input-box" placeholder="Type a message" type="text" />
  </Fragment>;
};

export default App;
