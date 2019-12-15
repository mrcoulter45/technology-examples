import React, { Component } from 'react'; // React object is never used explicitly in the code, but must be imported because Babel will compile JSX elements into Javascript DOM elements that use the React object

class Counter extends Component {
  // props must be passed to constructor if constructor is used because the constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which will cause bugs.
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('Counter - Component Updated');
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // used for dynamic class assignment
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    // rendering lists
    return (
      <ul>
        { this.state.tags.map(tag => <li key={tag}>{tag}</li>) } {/* map function creates a new array with the results of calling a provided function on every element in the calling array */}
      </ul>
    );
  }

  render() {
    console.log('Counter - Rendered');

    return (
      <div> {/* A 'React.Fragment' can be used instead of a div so that an unnessary div is not rendered in the DOM, however, elements will be in the same row */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          // onClick={this.handleIncrement} // Function reference can be used if no arguments need to be passed
          // onClick={() => this.handleIncrement(this.state.value)} // Inline function. Used when we need to pass an argument to an event handler (1:12:59 https://www.youtube.com/watch?v=Ke90Tje7VS0)
          // Here, the 'onIncrement' prop is a reference to the 'handleIncrement' function in 'App.js'.
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button 
          // Here, the 'onDelete' prop is a reference to the 'handleDelete' function in 'App.js'.
          // Using 'id' prop passed from parent component
          onClick={() => this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

}

export default Counter; // allows Counter to be seen and used by other files
