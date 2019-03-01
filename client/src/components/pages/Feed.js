import React, { Component } from 'react';
import CreatePost from '../CreatePost';
import PostCard from '../PostCard';

export default class Feed extends Component {
  render() {
    return (
      <div className="feed-container">
        <div className="feed">
          <CreatePost />
          <PostCard />
        </div>  
      </div>
    )
  }
}
