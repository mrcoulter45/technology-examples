import React, { Component } from 'react'; // React object is never used explicitly in the code, but must be imported because Babel will compile JSX elements into Javascript DOM elements that use the React object

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1','tag2','tag3'],
    imageUrl: "https://picsum.photos/200"
  };

  constructor() {
    super(); // 
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  // used for dynamic class assignment
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // Conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        { this.state.tags.map(tag => <li key={tag}>{tag}</li>) } {/* map function creates a new array with the results of calling a provided function on every element in the calling array */}
      </ul>
    );
  }

  handleIncrement(count) {
    console.log(count);
    this.setState({count: this.state.count + 1}); // this function is inherited from 'Component' parent class
  }

  render() {
    return (
      <React.Fragment> {/*can be used instead of a div so that an unnessary div is not rendered in the DOM*/}
        <img src={this.state.imageUrl} alt=""/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          // onClick={this.handleIncrement} // Used if no argument to pass
          onClick={() => this.handleIncrement(this.state.count)} // Inline function. Used when we need to pass an argument to an event handler (1:12:59 https://www.youtube.com/watch?v=Ke90Tje7VS0)
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

}

export default Counter; // allows Counter to be seen and used by other files
