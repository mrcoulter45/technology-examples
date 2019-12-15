import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
  state = {
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    console.log('Counters - Rendered');
    const { counters, onReset, onIncrement, onDelete} = this.props;

    return (
      <div className='row'>
        <div className='col'>
          <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          {/*list of 'Counter' components*/}
          {counters.map(counter => (
            <Counter 
              key={counter.id} 
              onIncrement={onIncrement}
              onDelete={onDelete} 
              counter={counter} // includes 'id' and 'value' from this.props.counters 
            />
          ))}
        </div>
        <div className='col'>
          {<img src={this.state.imageUrl} alt=""/>}
        </div>
      </div>
    ) 
  }
  };

export default Counters; 
