// Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
// Create a react component for a blog feed comments

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45pm"
        comments="Great blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 9:45am"
        comments="Awesome post, thanks!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 7:45pm"
        comments="Well done, the best blog post!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};
// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));
