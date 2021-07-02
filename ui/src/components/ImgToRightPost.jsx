import PostImg from "./PostImg";
import PostTxt from "./PostText";

const ImgToRightPost = (props) => {
  return (
    <div>
      <div id={`post${props.postIndex}`} className='row'>
        <div className="row align-items-center my-5">
          <PostImg postIndex={props.postIndex} />
          <PostTxt postIndex={props.postIndex} postName={props.postName} postId={props.postId} postDescription={props.postDescription} />
        </div>
      </div>
    </div>
  )
}

export default ImgToRightPost;