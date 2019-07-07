import React from "react";
import Card from "../UI/Card";

const PhotoGrid = props => {
  const { posts } = props;

  return (
    <div className="ui three column grid">
      {posts.map(post => (
        <div className="column" key={post.id}>
          <Card {...post} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
