# React

## Background
- React is a Javascript library that is used for building fast user interfaces
- Developed at Facebook in 2011
- Built from independent components
- Every React application is a tree of components
- Each component will usually be a Javascript class that has a 'state' object and a 'render()' method
    - Output of the 'render()' method will be a React element, which is a Javascript object that maps to a real DOM element, and represents that DOM element in memory
    - React elements are referred to as the 'Virtual DOM'
    - Whenever the state of of a component changes, a new React element is created. This new React element is compared to the previous React element stored in memory so that React can figure out what in the virtual DOM has changed. The real DOM in the browser is then updated with the new virtual DOM.
- React 'reacts' to state changes, and updates the DOM automatically.

## Installation

1. Install Node JS
    ```
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt install nodejs
    nodejs -v
    ```
    - Check you have the correct version here [Node JS](https://nodejs.org/en/)
1. Install npm
    ```
    npm install npm@latest -g
    npm -v
    ```
    - Check you have the correct version here [npm](https://www.npmjs.com/package/npm)

## Tutorial

1. `npm i -g create-react-app`
1. `create-react-app <project name>`
        - projects created this way enables 'hot module reloading'
    - had to run a `sudo chown -R 1000:1000` command to get this to work
1. `cd <project name>`
1. `npm i bootstrap`
1. `npm start` - will launch development server on port 3000

## Debugging
[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
Right click > Inspect > Components
- Allows you to inspect:
    - all components
    - all state of each component
    - elements of each component
    - inspect corresponding DOM element of each component
    - log component data to console
    - view original jsx source code of components and set breakpoints there
    - typing `$r` in the console lets you view the state of component instances in the DOM. Similarly, in the 'Elements' tab, typing `$0` lets you view state of different elements in the DOM.

## React Rules
- React rule of thumb: 'The component that owns a piece of the state should be the one modifying it.'
- Do not modify component state directly. State must be modified with the `this.setState` method.

## Vocab
- JSX: JavaScript XML
- Component State: Data that is local or private to the component, it cannot be accessed outside of the component.
- Component Props: A plain JavaScript object that includes all of the attributes that are set and passed to the component by the parent component (component input). Props are also READ ONLY. Includes 'value' and 'onDelete' in the example:
```
// parent component
<Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} />
```
Here, 'onDelete' is a reference to a function in the parent component. This allows you to call a parent component function from a child component.
- Children props can be passed like so:
```
// parent component
<Counter key={counter.id} value={counter.value}>
    <h4>Counter #{counter.id}</h4>
</Counter>

// child component
render() {
    return (
        <div> {
            {this.props.children}
            ...
```
- Controlled Component: Does not have its own local state, receives all data via props and raises events whenever data needs to be changed. These components are entirely controlled by the parent.
- Stateless Functional Component: If a component only has the render method and does not contain any event handlers, helper methods, or state, and only uses props for data passing, a 'stateless functional component' may be used. Lifecycle hooks may not be used in these components.
Eg.
```
import React from 'react';

const NavBar = (props) => {
  return (
    ...
  );
};

export default NavBar;
```

## Special Functions
- this.setState() - this function is inherited from 'Component' parent class. It tells React that we are updating the state, then it will figure out what part of the state has changed, and based on that, it will bring the DOM into sync with the virtual DOM. In other words, the `setState` function tells React that the state of this component is going to change. React will then schedule an asynchronous call to the `render` function, which will return a new React element. At this point, the new virtual DOM will be compared to the DOM, and the differences will be detected. React will then update the DOM with ONLY the elements that were modified, which is why each JSX element MUST be uniquely identifiable.
- Component Lifecycle Phases (only for class components):
1. Mount - when an instance of a component is created and inserted into the DOM
    Lifecycle Hooks (Methods):
    1. constructor
        - called only once when an instance of a class is created
        - good place to set initial state (possibly from external props)
            - `this.state` will be set directly, `this.setState()` is not used in the constructor
            - if props are used in the constructor, `props` will need to be passed as parameters to `constructor(props)` and `super(props)`
    2. render
        - returns a React element that represents the virtual DOM
        - when a component is rendered, all of its children are rendered recursively
    3. componentDidMount
        - called after component is mounted (component is rendered into the DOM)
        - best place to make API calls to get data from servers
2. Update - when the state or props of a component are changed
    Lifecycle Hooks (Methods):
    1. render
        - called when component props or state changes
    2. componentDidUpdate
        - called after a component is updated and rendered (new state or props)
        - has access to the `prevProps` and `prevState` objects
3. Unmount - when a component is removed from the DOM
    Lifecycle Hooks (Methods):
    1. componentWillUnmount
        - called just before a component is removed from the DOM
        - good opportunity to do any sort of cleanup that needs to be done before the component is removed from the DOM to prevent memory leaks

## Notes
- 'node_modules' dir contains all 3rd party libraries (never modify anything in this dir, as any changes made to files in this directory will be overwritten on the next npm install or update)
- 'public' - contains public assets of the application
    - contains index.html that contains the div that contains the entire React application
- 'src' - contains all component code for React application
- 'Component' class is built into React
- React works on JSX (Javascript XML), neither string nor HTML, describes what the UI will look like
    - For JSX to work, has to be passed to Babel, a modern Javascript compiler. Babel can take JSX ass input, and output Javascript code that can be run in the browser.
    - Eg. at https://babeljs.io/repl (online Javascript compiler),
    `const element = <h1>Hello World</h1>;`
    is compiled by Babel to:
    ```
    "use strict";
    var element = React.createElement("h1", null, "Hello World");
    ```
    - Notice that the object 'React' is in the compiled output. This is why 'React' must be imported into the project in index.js.
- 'index.js' - entry point for the application
- JSX expressions are normal Javascript objects
- JSX expressions in the React code are compiled into React elements, which are just Javascript objects. Hence, 'className' is used intead of 'class', because 'class' is a reserved keyword in Javascript.
- Every React element must have a unique 'key'. This is how React is able to keep track of all of the elements in the virtual DOM so that it can be kept in sync with the DOM. This ID of each element is denoted by the element's 'key' attribute in JSX. Keys must be unique only in their respective scope, Eg. if a component has multiple lists of elements being rendered, element keys must only be unique in their respective lists, not across the entire component.
- In event handlers in React, 'this' is undefined. This is because React runs in 'strict' mode via the line `"use strict";` that is created upon compiling the JSX into Javascript code, where 'this' is undefined. In non-strict mode, 'this' would refer to the Window object by default. So, because of this, the event handler does not know that 'this' is referring to the component object. So, the Javascript 'bind' method is needed. The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. Therefore, in the component's constructor where 'this' is referring to the component object, a line such as `this.handleIncrement = this.handleIncrement.bind(this);` may be used to solve the problem, `handleIncrement` being the handler function that is called when, say, a button is pressed via `onClick`.
- Inline CSS styling in React is done as follows:
```
<div style={{ color: 'white', backgroundColor: 'blue' }}>
  Hello World
</div>
```

## References

- [Programming with Mosh - "React Tutorial - Learn React - React Crash Course [2019]"](https://www.youtube.com/watch?v=Ke90Tje7VS0)
