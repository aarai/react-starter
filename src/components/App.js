import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super();
      this.update = this.update.bind(this);
    }

    update() {
      this.setState({val: this.state.val + 1});
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount(){
    }

    render() {
      return (
        <h1>Hello World</h1>
      )
    }
}

export default App;
