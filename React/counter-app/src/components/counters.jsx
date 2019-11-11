import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 7 },
      { id: 4, value: 0 },
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button 
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/*list of 'Counter' components*/}
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id} 
            onDelete={this.handleDelete} 
            counter={counter} // includes 'id' and 'value' from this.state.counters 
          />
        ))}
      </div>
    ) 
  }
  };

export default Counters; 
