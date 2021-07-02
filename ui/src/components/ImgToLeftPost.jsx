import PostImg from "./PostImg";
import PostTxt from "./PostText";

const ImgToLeftPost = (props) => {
  return (
    <div>
      <div id={`post${props.postIndex}`} className="row">
        <div className="row align-items-center my-5">
          <PostTxt postIndex={props.postIndex} postName={props.postName} postId={props.postId} postDescription={props.postDescription} />
          <PostImg postIndex={props.postIndex} />
        </div>
      </div>
    </div>
  )
}

export default ImgToLeftPost;