import { postDropdownListMenu } from '../../data/main';
import DropdownState from '../../hooks/DropdownState';
import DotsVertical from '../icon/DotsVertical';
import Globe from '../icon/Globe';
import PhotoProfil from '../PhotoProfil';

const PostHeader = () => {
  const [dropdown, dropdownOpen, _, dropdownRef] = DropdownState();

  return (
    <div className='flex space-x-2'>
      <div className='flex space-x-2 items-center'>
        <PhotoProfil active={true} />
        <div className='flex flex-col'>
          <h4 className='block text-sm font-semibold text-gray-600'>{'Muhammad Badrun'}</h4>
          <p className='block text-xs text-gray-500 -mb-1'>{'Freelance Web Developer'}</p>
          <p className='flex items-center space-x-1'>
            <span className='block text-xs text-gray-500'>sekarang</span>
            <span className='block text-gray-500'>•</span>
            <Globe />
          </p>
        </div>
      </div>
      <div className='flex-grow flex justify-end relative'>
        <button
          onClick={dropdownOpen}
          className='block flex-none h-max focus:outline-none p-1 -mt-2 rounded-full hover:bg-zinc-200 hover:bg-opacity-70'
        >
          <DotsVertical className='text-gray-500' />
        </button>

        {dropdown && (
          <div
            ref={dropdownRef}
            className='absolute w-[355px] z-20 bg-white top-0 mt-8 right-0 shadow-lg rounded-md py-1 ring-1 ring-gray-200'
          >
            {postDropdownListMenu.map((item) => (
              <button
                key={item.id}
                className='py-2 px-4 text-left w-full flex items-center hover:bg-zinc-200 space-x-2'
              >
                <div className='flex-shrink-0'>
                  <item.icon className='w-6 h-6 text-zinc-700' />
                </div>
                <div>
                  <span className='block text-sm font-semibold text-gray-700'>{item.title}</span>
                  {item.description != null && (
                    <span className='block text-xs text-gray-500'>{item.description}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostHeader;
