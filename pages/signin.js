import { useEffect } from 'react';
import FooterAuth from '../components/FooterAuth';
import Linkedintext from '../components/icon/Linkedintext';
import Link from 'next/link';

const Signin = () => {
  useEffect(() => {
    document.body.classList.add('bg-white');
  }, []);
  return (
    <div className='px-8'>
      <div className='w-full h-[66px] flex items-end pb-2 md:px-14'>
        <Linkedintext className='w-[110px] h-[28px]' />
      </div>
      <div className='sm:w-[352px] md:rounded-xl md:shadow-lg mx-auto md:p-6 md:ring-1 md:ring-zinc-200'>
        <div className='flex flex-col'>
          <h2 className='block text-[32px] text-gray-800 font-semibold'>Login</h2>
          <p className='block text-gray-700 text-sm'>
            Ikuti perkembangan terbaru dari dunia profesional Anda
          </p>
        </div>
        <div className='space-y-4 mt-6'>
          <div className='relative border border-gray-400 pt-[20px] pb-[4px] px-3 rounded'>
            <input type={'text'} className='w-full focus:outline-none text-lg' />
            <span className='block text-gray-500 text-lg absolute top-1/2 left-3 -translate-y-1/2'>
              Email atau Nomor Telepon
            </span>
          </div>
          <div className='relative border border-gray-400 pt-[20px] pb-[4px] px-3 rounded'>
            <input type={'text'} className='w-full focus:outline-none text-lg' />
            <span className='block text-gray-500 text-lg absolute top-1/2 left-3 -translate-y-1/2'>
              Kata Sandi
            </span>
            <button className='block px-2 py-1 rounded-full hover:bg-blue-200 text-[#0a66c2] text-sm font-semibold absolute top-1/2 right-1 -translate-y-1/2 focus:outline-none'>
              tampilkan
            </button>
          </div>
          <Link href={'/signup'}>
            <a className='block w-max -ml-1 font-semibold text-[#0a66c2] hover:underline px-2 py-1 rounded-full hover:bg-blue-200'>
              Lupa Kata sandi?
            </a>
          </Link>
          <div className='flex flex-col space-y-3'>
            <button className='block w-full py-3 focus:outline-none bg-[#0a66c2] rounded-full font-semibold text-white'>
              Login
            </button>
            <div className='flex items-center justify-center space-x-4'>
              <div className='h-[1px] bg-gray-400 w-full flex-grow-0' />
              <span className='block text-sm text-gray-500'>atau</span>
              <div className='h-[1px] bg-gray-400 w-full flex-grow-0' />
            </div>
            <button className='block w-full border border-gray-500 py-3 focus:outline-none rounded-full font-semibold text-gray-500'>
              Login dengan Google
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-2 mt-8'>
        <p className='block text-gray-700'>Baru Bergabung di LinkedIn?</p>
        <Link href={'/signup'}>
          <a className='block font-semibold text-blue-600'>Bergabung sekarang</a>
        </Link>
      </div>
      <FooterAuth />
    </div>
  );
};

export default Signin;
