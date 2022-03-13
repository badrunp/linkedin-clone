import { Mercado4, Mercado5 } from './icon/Mercado';
import Plus from './icon/Plus';
import Link from 'next/link';
import { recomentasion } from '../data/main';
import Linkedintext from './icon/Linkedintext';
import { MainRightMenuItem } from '../data/navbar';

const MainRight = () => {
  return (
    <div className='flex-none hidden lg:block lg:w-[300px] xl:w-[315px] relative'>
      <div className='flex flex-col space-y-4'>
        <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full overflow-hidden p-3'>
          <div className='flex items-center justify-between'>
            <h4 className='block text-gray-800 font-semibold'>Tambahkan ke feed Anda</h4>
            <Mercado4 />
          </div>
          <div className='py-4 flex flex-col space-y-3'>
            {recomentasion.map((item) => (
              <div key={item.id} className='flex items-start justify-start space-x-2'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img src={item.avatar} alt={item.avatar} />
                  </div>
                </div>
                <div className='flex flex-col items-start'>
                  <h5 className='block text-sm font-semibold text-gray-800'>{item.name}</h5>
                  <p className='block text-xs text-gray-500 mt-1'>{item.title}</p>
                  <button className='mt-2 py-1 px-4 rounded-full border border-gray-700 flex items-center'>
                    <Plus className='w-5 h-5' />
                    <span className='block font-semibold text-gray-600'>Ikuti</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link href={'/'}>
            <a className='flex items-center justify-start space-x-1'>
              <h4 className='block text-gray-500 text-sm font-semibold px-1'>
                Lihat semua rekomendasi
              </h4>
              <Mercado5 />
            </a>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <div className='flex justify-center items-center flex-wrap gap-x-4 gap-y-2 px-6'>
            {MainRightMenuItem.map((item) => (
              <Link key={item.id} href={item.url}>
                <a className='block text-xs text-gray-500 hover:text-blue-700 hover:underline'>
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
          <div className='text-center flex items-center space-x-1 justify-center'>
            <Linkedintext />{' '}
            <span className='block text-xs text-gray-800'>LinkedIn Corporation © 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
