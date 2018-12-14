# Learn React 101

## React, JSX, Components, Semantic UI, Faker JS,

In this project we are learning JSX.

```// Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component / function or Class
const App = () => {
  const buttonText = 'Click Me!';
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button
        style={{ backgroundColor: 'blue', color: '#fff',padding: '3px 5px' }}>
        {buttonText}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));
```

## Component Nesting

A component can be shown inside of another.

## Component Resuability

Make components that can be esily reused through out the application.

### Creating a reusable, configurable component:

Indentify the duplication, what's its purpose?, choose a decriptive name!, Create a new file to house the new component and configure by using React's "props" system.

## Component Configuration

Configure a component when its created.
