import React, { Component } from 'react'; // React object is never used explicitly in the code, but must be imported because Babel will compile JSX elements into Javascript DOM elements that use the React object

class Counter extends Component {
  state = {
    value: this.props.counter.value, // using 'value' prop passed from parent component
    tags: ['tag1','tag2','tag3'],
    imageUrl: "https://picsum.photos/200"
  };

  // props must be passed to constructor if constructor is used because the constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which will cause bugs.
  // constructor(props) {
  //   super(props);
    // this.handleIncrement = this.handleIncrement.bind(this); // needed if event handler is being called by reference instead of inline function
  // }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  // used for dynamic class assignment
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
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

  // event handler for 'Increment' button
  handleIncrement(value) {
    this.setState({value: this.state.value + 1}); // this function 'setState' is inherited from the 'Component' parent class. Used to update component state
  }

  render() {
    return (
      <div> {/* A 'React.Fragment' can be used instead of a div so that an unnessary div is not rendered in the DOM, however, elements will be in the same row */}
        {/*<img src={this.state.imageUrl} alt=""/>*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          // onClick={this.handleIncrement} // Function reference can be used if no arguments need to be passed
          onClick={() => this.handleIncrement(this.state.value)} // Inline function. Used when we need to pass an argument to an event handler (1:12:59 https://www.youtube.com/watch?v=Ke90Tje7VS0)
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button 
          onClick={() => this.props.onDelete(this.props.counter.id)} // Here, the 'onDelete' prop is a reference to the 'handleDelete' function in 'Counters'.
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*{this.renderTags()}*/}
      </div>
    );
  }

}

export default Counter; // allows Counter to be seen and used by other files
