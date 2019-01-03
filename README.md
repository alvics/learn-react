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

## props.children

```
import React from 'react';

const ApprovalCard = (props) => {
    console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>  // passing children into a component inside a parent element
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
```

index.js

```
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45pm"
          comments="Great blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
```

## Component Nesting

A component can be shown inside of another.

## Component Resuability

Make components that can be easily reused through out the application.

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

## Understanding 'state'
Only usable with class components,
   You will confuse props with this.state,
   'state' is a JS object that contains data relevant to a component,
   Updating 'state' on a component causes the component to (almost) instantly rerender,
   'state' must be initialized when a component is created (constructor), 
   'state' can ONLY be updated using the function 'setState'

## Class Components

```
class App extends React.Component {
 state = { lat: null, lon: null, errorMessage: '' }; // Inializing 'state' direct assignment, JS object (key value pairs) with it's default value to null

componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          // updating the state, rerendering with setState
          this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
          }); // JS object
        },
        err => {
          this.setState({ errorMessage: err.message });
        }
      );
    }
```

# Component Lifecycle
### JS constructor()  // good place to do one-time set up
This  is the very first function that is called in the instance that it's created.

### render() // Avoid doing anything besides returning JSX.

# Lifecylce Methods
## componentDidMount()  
// loads one time, place to do data-loading!
## componentDidUpdate()  
 // loads when the component updates, place to do more data-loading when state/props change.
## componentWillMount() 
// place to cleanup (especially no-React stuff)


### Benefits:
1.Easier code organization,
2.Can use 'state' (another React system),
3.Understands lifecycle events, 4.Easier to handle user imput, 5.Easier to do things when th app first starts.

# Rendering a List 
### Taking a string and mapping to an JSX expression

```
 state = {
    count: 0,
    tags: ['tags1', 'tags2', 'tags3']
  };

return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
```

# Conditionally Render Content Using the Logical Operator &&
First the condition, then operator and last text or JSX
```
render() {
  return (
    <div>
       {this.state.tags.length === 0 && "Please create a new tag!"}
    </div>
  )
}
```

# Handle Events
```
handleIncrement() {
  console.log('Increament was clicked!')
}

  render() {
    return (
      <div>
        <button 
        onClick={this.handleIncrement} 
        className="btn btn-secondary btn-sm">
        Increment
        </button> 
        {this.state.tags.length === 0 && "Please create a new tag!"}
      </div>
    );
  }

```
