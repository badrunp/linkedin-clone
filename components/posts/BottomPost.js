import Link from 'next/link';
import { postBottomMenu } from '../../data/main';
import LikeWithColor from '../icon/LikeWithColor';

const BottomPost = () => {
  return (
    <div className='bottom'>
      <div className='flex items-center justify-between border-b py-2'>
        <div className='flex items-center space-x-1 group cursor-pointer'>
          <LikeWithColor />
          <Link href={'/'}>
            <a className='block text-gray-500 text-xs group-hover:underline group-hover:text-blue-700'>
              2
            </a>
          </Link>
        </div>
        <Link href={'/'}>
          <a className='block text-xs text-gray-500 hover:underline hover:text-blue-700'>
            1 Komentar
          </a>
        </Link>
      </div>
      <div className='flex items-center justify-between py-1 space-x-2'>
        {postBottomMenu.map((item) => (
          <button
            key={item.id}
            className='flex items-center justify-center space-x-1 w-full py-3 rounded hover:bg-zinc-200 hover:bg-opacity-70'
          >
            <item.icon className='text-gray-600' />
            <span className='block text-sm font-semibold text-gray-500'>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomPost;
