const PostImg = (props) => {
  return (
    <div id={`postimg${props.postIndex}`} className="col-lg-5">
      <img
        className="img-fluid rounded mb-4 mb-lg-0"
        src="http://placehold.it/900x400"
        alt="post image"
      />
    </div>
  )
}

export default PostImg;