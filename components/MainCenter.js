import { buttonMenuItem } from '../data/main';
import DropdownState from '../hooks/DropdownState';
import CarretDown from './icon/CarretDown';
import PhotoProfil from './PhotoProfil';
import PostCard from './posts/PostCard';

const DropdownSortingMenuItem = ({ title, active = false }) => {
  return (
    <button
      className={`block border-l-2 ${
        active ? 'border-green-600' : 'border-transparent'
      } py-2 px-4 text-sm text-gray-500 font-semibold hover:bg-zinc-200 hover:bg-opacity-70 w-full text-left`}
    >
      {title}
    </button>
  );
};

const MainCenter = () => {
  const [dropdownSorting, dropdownSortingOpen, _, dropdownSortingRef] = DropdownState();

  return (
    <div className='flex-none w-full sm:w-[524px] md:w-[493px] lg:w-[432px] xl:w-[540px]'>
      <div className='flex flex-col space-y-2'>
        <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full pt-3 pb-2 px-4 space-y-2'>
          <div className='flex items-center space-x-2'>
            <PhotoProfil />
            <button className='block text-gray-500 hover:bg-zinc-200 hover:bg-opacity-80 transition font-semibold flex-grow-0 w-full h-12 px-4 border border-zinc-400 text-left text-sm rounded-full focus:outline-none'>
              Mulai buat posting
            </button>
          </div>
          <div className='flex justify-between items-center px-2'>
            {buttonMenuItem.map((item) => (
              <button
                key={item.id}
                className='flex items-center focus:outline-none py-3 px-2 space-x-3 hover:bg-zinc-200 hover:bg-opacity-70 rounded'
              >
                <item.icon />
                <span className='block text-sm text-gray-500 font-semibold'>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className='relative'>
          <button className='flex items-center w-full' onClick={dropdownSortingOpen}>
            <div className='h-[1px] w-full flex-grow-0 bg-gray-400' />
            <span className='block text-xs text-gray-500 flex-shrink-0 ml-3 mr-1'>
              Sorting Menurut:
            </span>
            <span className='block text-xs font-semibold text-gray-700 flex-shrink-0'>
              Terpopuler
            </span>
            <CarretDown className='w-6 h-6' />
          </button>

          {dropdownSorting && (
            <div
              ref={dropdownSortingRef}
              className='absolute w-[168px] z-20 bg-white top-0 mt-8 right-0 shadow-lg rounded-md py-1 ring-1 ring-gray-200'
            >
              <DropdownSortingMenuItem title={'Terpopuler'} />
              <DropdownSortingMenuItem title={'Terbaru'} active={true} />
            </div>
          )}
        </div>

        <PostCard />
      </div>
    </div>
  );
};

export default MainCenter;
