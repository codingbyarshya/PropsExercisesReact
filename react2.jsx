/* Exercise Props - Default value */
/*
import React from 'react';

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

Welcome.defaultProps = {
  name: 'Guest',
};

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default Welcome;
*/
//============================================================================================================================
/*Exercise Props - Second prop*/
/*
import React from 'react';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        <p>Your age is {age}.</p>
      </div>
    );
  }
}

export default Welcome;
*/
//============================================================================================================================
//Exercise Props - JSX expression
/*
import React from 'react';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        <p>Your age is {age}.</p>
      </div>
    );
  }
}

export default Welcome;
*/
//============================================================================================================================
// Props - Extract message
/*
import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        <Age age={age} />
      </div>
    );
  }
}

export default Welcome;
*/
//============================================================================================================================
