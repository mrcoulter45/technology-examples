import React, { Component } from 'react'; // React object is never used explicitly in the code, but must be imported because Babel will compile JSX elements into Javascript DOM elements that use the React object

class Counter extends Component {
  render() {
    return (
      <React.Fragment> {/*can be used instead of a div so that an unnessary div is not rendered in the DOM*/}
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter; // allows Counter to be seen and used by other files
