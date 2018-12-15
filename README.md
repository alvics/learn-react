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

## Props

System for passing data from a parent component to a child component (customize how the child looks or behaves).

The Component using props (JavaScript objects) key value pairs

```
// Make first Blog Comment Component, with image, name and date.
import React from 'react';

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comments}</div>
      </div>
    </div>
  );
};

export default CommentDetail;

```

Providing Parent to child Props

```
<CommentDetail author={Sam}  timeAgo="Today at 4:45pm"/>        // Name & Value (Objects-key: value pairs)
```

Passing props through the child

```
import React from 'react';
import faker from 'faker';
const CommentDetail = props => {      // adding props object

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
        {props.author}                 // using props inside child component
        </a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">Great blog, how artistic!</div>
      </div>
    </div>
  );
};

 export default CommentDetail;
```

Index.js

```
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
   <div className="ui container comments">
      <CommentDetail
        author="Sam"                    // adding props name and value
        timeAgo="Today at 4:45pm"
        comments="Great blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"                  // adding props name and value
        timeAgo="Today at 9:45am"
        comments="Awesome post, thanks!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"                 // adding props name and value
        timeAgo="Yesterday at 7:45pm"
        comments="Well done, the best blog post!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};
// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));
```

## Component Configuration

Configure a component when its created.
