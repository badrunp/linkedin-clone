import BottomPost from './BottomPost';
import PostContent from './PostContent';
import PostHeader from './PostHeader';

const PostCard = () => {
  return (
    <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full pt-3 px-4'>
      <PostHeader />
      <PostContent />
      <BottomPost />
    </div>
  );
};

export default PostCard;
