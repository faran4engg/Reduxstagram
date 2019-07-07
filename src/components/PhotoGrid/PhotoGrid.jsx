import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import PlaceHolderCard from "../UI/CardLoader/CardLoader";

const PhotoGrid = props => {
  const { posts } = props;

  const [loading, setLoading] = useState(true);
  useEffect(props => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="ui three column grid">
      {posts.map(post => (
        <div className="column" key={post.id}>
          {loading ? <PlaceHolderCard /> : <Card {...post} />}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
