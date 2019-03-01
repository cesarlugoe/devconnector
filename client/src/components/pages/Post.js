import React, { Component } from 'react';
import PostCard from '../PostCard';
import CreatePost from '../CreatePost';


export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="post">
            <PostCard />
            <CreatePost />
            <PostCard />
            <PostCard />
        </div>
     </div>
    )
  }
}
