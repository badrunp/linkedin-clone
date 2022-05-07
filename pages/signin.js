import FooterAuth from '../components/FooterAuth';
import Linkedintext from '../components/icon/Linkedintext';
import Link from 'next/link';
import Google from '../components/icon/Google';
import AuthInput from '../components/AuthInput';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/authContext';

const Signin = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [loginLoading, setLoginLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setErrorMessage(null);
      // router.replace('/');
    } catch (error) {
      setLoginLoading(false);
      setErrorMessage(error.message);
      setData({
        ...data,
        password: '',
      });
    }
  };

  const handleSigninWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      router.replace('/');
    } catch (error) {
      // console.log(error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!loading && user) router.replace('/');

  return (
    <div className='px-8 bg-white min-h-screen flex flex-col justify-center'>
      <Link href='/'>
        <a className='w-full h-[66px] flex items-center justify-center md:justify-start md:items-end pb-2 md:px-14'>
          <Linkedintext className='w-[135px] h-[33px] md:w-[110px] md:h-[28px]' />
        </a>
      </Link>
      <div className='bg-white sm:w-[352px] md:rounded-xl md:shadow-lg mx-auto md:p-6 md:ring-1 md:ring-zinc-200'>
        <div className='flex flex-col'>
          <h2 className='block text-[32px] text-gray-800 font-semibold'>Login</h2>
          <p className='block text-gray-700 text-sm'>
            Ikuti perkembangan terbaru dari dunia profesional Anda
          </p>
        </div>
        <form className='space-y-4 mt-6'>
          {errorMessage && (
            <div className='bg-red-500 px-4 py-4 rounded-md w-full'>
              <span className='block text-white font-semibold tracking-tight'>
                {'Masukan email dan password dengan bener!'}
              </span>
            </div>
          )}
          <AuthInput label='Email' name='email' value={data.email} onChange={handleChange} />
          <AuthInput
            label='Kata Sandi'
            type='password'
            name='password'
            value={data.password}
            onChange={handleChange}
            password={true}
          />
          <Link href={'/signup'}>
            <a className='block w-max -ml-1 font-semibold text-[#0a66c2] hover:underline px-2 py-1 rounded-full hover:bg-blue-200'>
              Lupa Kata sandi?
            </a>
          </Link>
          <div className='flex flex-col space-y-3'>
            <button
              onClick={handleSubmit}
              className='block w-full py-3 focus:outline-none bg-[#0a66c2] rounded-full font-semibold text-white'
            >
              {loginLoading ? 'Loading...' : 'Login'}
            </button>
            <div className='flex items-center justify-center space-x-4'>
              <div className='h-[1px] bg-gray-400 w-full flex-grow-0' />
              <span className='block text-sm text-gray-500'>atau</span>
              <div className='h-[1px] bg-gray-400 w-full flex-grow-0' />
            </div>
            <button
              onClick={handleSigninWithGoogle}
              className='w-full border border-gray-500 py-3 focus:outline-none rounded-full font-semibold text-gray-500 flex space-x-2 justify-center'
            >
              <Google />
              <span className='block'>Login dengan Google</span>
            </button>
          </div>
        </form>
      </div>
      <div className='mt-8 text-center'>
        <p className='inline-block text-gray-700 mr-1'>Baru Bergabung di LinkedIn?</p>
        <Link href={'/signup'}>
          <a className='inline-block font-semibold text-blue-600'>Bergabung sekarang</a>
        </Link>
      </div>
      <FooterAuth />
    </div>
  );
};

export default Signin;
