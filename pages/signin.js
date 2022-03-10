import FooterAuth from '../components/FooterAuth';
import Linkedintext from '../components/icon/Linkedintext';
import Link from 'next/link';
import Google from '../components/icon/Google';
import AuthInput from '../components/AuthInput';

const Signin = () => {
  return (
    <div className='px-8 bg-white'>
      <div className='w-full h-[66px] flex items-end pb-2 md:px-14'>
        <Linkedintext className='w-[110px] h-[28px]' />
      </div>
      <div className='bg-white sm:w-[352px] md:rounded-xl md:shadow-lg mx-auto md:p-6 md:ring-1 md:ring-zinc-200'>
        <div className='flex flex-col'>
          <h2 className='block text-[32px] text-gray-800 font-semibold'>Login</h2>
          <p className='block text-gray-700 text-sm'>
            Ikuti perkembangan terbaru dari dunia profesional Anda
          </p>
        </div>
        <div className='space-y-4 mt-6'>
          <AuthInput label='Email atau Nomor Telepon' />
          <AuthInput label='Kata Sandi' type='password' password />
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
            <button className='w-full border border-gray-500 py-3 focus:outline-none rounded-full font-semibold text-gray-500 flex space-x-2 justify-center'>
              <Google />
              <span className='block'>Login dengan Google</span>
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
