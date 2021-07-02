import React from 'react';
import ImgToLeftPost from './ImgToLeftPost';
import ImgToRightPost from './ImgToRightPost';

const PostList = (props) => {
  const { repos: posts } = props;

  if (!posts || posts.length === 0) return <p>No repos, sorry</p>;
  
  var postComponents = [];

  posts.map((post, index) => {
    if(index%2 !== 0) {
      postComponents.push(<div><ImgToLeftPost postIndex={index} postName={post.name} postId={post.id} postDescription={post.description} /></div>);
    } else {
      postComponents.push(<div><ImgToRightPost postIndex={index} postName={post.name} postId={post.id} postDescription={post.description} /></div>);
    }
  })

  return <div>{postComponents}</div>;
};
export default PostList;