const PostTxt = (props) => {
  return (
    <div id={`posttxt${props.postIndex}`} className="col-lg-7">
      <h2 className="font-weight-light">{props.postName}</h2>
      <p>ID: {props.postId} - description: {props.postDescription}</p>
    </div>
  )
}

export default PostTxt;