import FooterAuth from '../components/FooterAuth';
import Linkedintext from '../components/icon/Linkedintext';
import Link from 'next/link';
import Google from '../components/icon/Google';
import AuthInput from '../components/AuthInput';

const Anchor = ({ children }) => {
  return (
    <span className='inline-block text-[#0a66c2] hover:underline cursor-pointer'>{children}</span>
  );
};

const Signup = () => {
  return (
    <div className='px-8 bg-white'>
      <div className='w-full h-[66px] flex justify-center items-end pb-2 md:px-14'>
        <Linkedintext className='w-[135px] h-[33px]' />
      </div>
      <h4 className='block text-[32px] text-gray-800 text-center mb-4 mt-2'>
        Dapatkan manfaat maksimal dari dunia profesional Anda
      </h4>
      <div className='bg-white sm:w-[352px] md:rounded-xl md:shadow-lg mx-auto md:p-6 md:ring-1 md:ring-zinc-200'>
        <div className='space-y-4 mt-6'>
          <AuthInput label='Email atau Nomor Ponsel' />
          <AuthInput label='Kata Sandi' type='password' password />
          <p className='block text-gray-700 text-xs text-center'>
            Dengan mengeklik Setuju & Bergabung, Anda menyetujui{' '}
            <Anchor>Perjanjian Pengguna</Anchor>,<Anchor>Kebijakan Privasi</Anchor>, dan{' '}
            <Anchor>Kebijakan Cookie</Anchor> LinkedIn.
          </p>
          <div className='flex flex-col space-y-3'>
            <button className='block w-full py-3 focus:outline-none bg-[#0a66c2] rounded-full font-semibold text-white'>
              Setuju & bergabung
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
      <div className='flex items-center justify-center space-x-2 mt-8 mb-8 md:mb-0'>
        <p className='block text-gray-700'>Sudah Bergabung di LinkedIn?</p>
        <Link href={'/signin'}>
          <a className='block font-semibold text-blue-600'>Login</a>
        </Link>
      </div>
      <FooterAuth />
    </div>
  );
};

export default Signup;
