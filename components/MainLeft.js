import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../hooks/authContext';
import ChevronDown from './icon/ChevronDown';
import { Mercado1, Mercado2, Mercado3 } from './icon/Mercado';
import Plus from './icon/Plus';

const MainLeft = () => {
  const [isInfo, setIsInfo] = useState(false);
  const { user } = useAuth();

  return (
    <div className='flex-none block w-full sm:w-[524px] md:w-[203px] lg:w-[180px] xl:w-[225px]'>
      <div className='flex flex-col space-y-2'>
        <div className='bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full overflow-hidden'>
          <div className='divide-y relative'>
            <div className='pb-4'>
              <div className='w-full h-14 bg-gray-800'></div>
              <div className='w-[72px] h-[72px] rounded-full overflow-hidden mx-auto border-2 border-white -mt-9'>
                <img src={user?.photo} alt={user?.email} />
              </div>
              <div className='flex flex-col text-center mt-5 space-y-1 px-3'>
                <h4 className='block text-base font-semibold'>{user?.email}</h4>
                <p className='block text-xs text-gray-500'>---</p>
              </div>
            </div>
            <div className={`${isInfo ? 'block' : 'hidden md:block'} py-4`}>
              <Link href={'/'}>
                <a className='flex items-start justify-between px-3 py-1 hover:bg-gray-200'>
                  <div className='flex flex-col'>
                    <p className='block text-gray-500 text-xs font-semibold'>Koneksi</p>
                    <p className='block text-gray-800 text-xs font-semibold'>
                      Kembangkan Jaringan Anda
                    </p>
                  </div>
                  <div>
                    <Mercado1 />
                  </div>
                </a>
              </Link>
            </div>
            <Link href={'/'}>
              <a
                className={`${
                  isInfo ? 'flex' : 'hidden md:flex'
                } items-start justify-between px-3 py-4 hover:bg-gray-200`}
              >
                <div className='flex flex-col'>
                  <p className='block text-gray-500 text-xs font-semibold'>
                    Akses alat & wawasan eksklusif
                  </p>
                  <p className='text-gray-800 text-xs font-semibold flex space-x-1'>
                    <Mercado2 />
                    <span>Coba Premium gratis</span>
                  </p>
                </div>
              </a>
            </Link>
            <Link href={'/'}>
              <a className={`${isInfo ? 'flex' : 'hidden md:flex'} px-3 py-3 hover:bg-gray-200`}>
                <p className='text-gray-800 text-xs font-semibold flex space-x-1'>
                  <Mercado3 />
                  <span>Item Saya</span>
                </p>
              </a>
            </Link>
          </div>
        </div>
        <div
          className={`${
            isInfo ? 'block' : 'hidden md:block'
          } bg-white ring-1 ring-gray-200 shadow-sm rounded-md w-full`}
        >
          <div className='divide-y relative'>
            <div className='flex flex-col space-y-3 py-3'>
              <Link href={'/'}>
                <a className='block text-xs font-semibold text-blue-600 px-3 hover:underline'>
                  Group
                </a>
              </Link>
              <Link href={'/'}>
                <a className='text-xs font-semibold px-3 flex items-center justify-between'>
                  <span className='block text-blue-600 hover:underline w-full'>Acara</span>
                  <div className='p-1 rounded-full hover:bg-gray-200'>
                    <Plus className='w-5 h-5' />
                  </div>
                </a>
              </Link>
              <Link href={'/'}>
                <a className='block text-xs font-semibold text-blue-600 px-3 hover:underline'>
                  Hastag Yang Diikuti
                </a>
              </Link>
            </div>
            <Link href={'/'}>
              <a className='flex justify-center px-3 py-3 hover:bg-gray-200'>
                <p className='text-gray-500 text-sm font-semibold'>
                  <span>Temukan Lebih banyak</span>
                </p>
              </a>
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsInfo(!isInfo)}
          className='md:hidden py-1 text-gray-500 flex items-center justify-center text-center w-full mx-auto focus:ouline-none text-sm font-semibold'
        >
          <span>{isInfo ? 'Lihat lebih sedikit' : 'Lihat Selengkapnya'}</span>
          <ChevronDown className={`${isInfo && 'rotate-180'} w-5 h-5`} />
        </button>
      </div>
    </div>
  );
};

export default MainLeft;
