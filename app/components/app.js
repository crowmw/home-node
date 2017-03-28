import React, { Component } from 'react';

import './style.scss';

class App extends Component {
  componentWillUnmount() {
    client.close();
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
